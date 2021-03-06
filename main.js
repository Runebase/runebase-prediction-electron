const _ = require('lodash');
const { app, BrowserWindow, Menu, shell, dialog } = require('electron');
const prompt = require('electron-prompt');
const axios = require('axios');
const express = require('express');
const path = require('path');
const os = require('os');
const { RunebasePredictionServer, RunebasePredictionConfig, RunebasePredictionDb, Constants, EmitterHelper, getLogger, Wallet } = require('runebase-prediction-server');

const { version, testnetOnly, encryptOk } = require('./package.json');
const Tracking = require('./src/analytics/tracking');
const { getRunebaseExecPath } = require('./src/utils');

/*
* Order of Operations
* 1. Show select env dialog
* 2. Set runebase env
* 3. Init DB
* 4. Start runebased & start loading window
* 5. Check wallet encryption
* 6. Show wallet unlock dialog if necessary
* 7. Start sync/API
* 8. Load UI
*/

const UI_PORT = 3000;
const EXPLORER_URL_PLACEHOLDER = 'https://runebasehost';
const { blockchainEnv, ipcEvent, execFile } = Constants;

/*
* Codes for type of event when killing the Runebase process
* NORMAL = regular shutdown
* QT_WALLET = shutdown runebased before starting QT wallet
*/
const [NORMAL, QT_WALLET] = [0, 1];

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let uiWin;
let i18n;
let killType;

function killRunebase(type) {
  try {
    killType = type;
    RunebasePredictionServer.killRunebaseProcess(true);
  } catch (err) {
    app.quit();
  }
}

function createWindow() {
  // Create the browser window.
  uiWin = new BrowserWindow({
    width: 400,
    height: 400,
    webPreferences: {
      nativeWindowOpen: true,
    },
  });

  uiWin.on('closed', () => {
    getLogger().debug('uiWin closed');
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    uiWin = null
    app.quit();
  });

  uiWin.webContents.on('new-window', (event, url) => {
    event.preventDefault();

    let formattedUrl = url;
    if (url.includes(EXPLORER_URL_PLACEHOLDER)) {
      formattedUrl = url.replace(EXPLORER_URL_PLACEHOLDER, RunebasePredictionConfig.getRunebaseExplorerUrl());
    }
    shell.openExternal(formattedUrl);
  });

  if (_.includes(process.argv, '--devtools')) {
    uiWin.webContents.openDevTools();
  }

  // Load intermediary loading page
  uiWin.loadURL(`file://${__dirname}/ui/html/loading/index.html`);
}

function showLaunchRunebaseWalletDialog() {
  app.focus();

  const [CANCEL, LAUNCH] = [0, 1];
  dialog.showMessageBox({
    type: 'question',
    buttons: [i18n.get('cancel'), i18n.get('launch')],
    title: i18n.get('runebaseWalletDialogTitle'),
    message: i18n.get('runebaseWalletDialogMessage'),
    defaultId: CANCEL,
    cancelId: CANCEL,
  }, (response) => {
    if (response === LAUNCH) {
      if (RunebasePredictionServer.getRunebaseProcess()) {
        killRunebase(QT_WALLET);
      } else {
        // Show dialog to wait for initializing to finish
        dialog.showMessageBox({
          type: 'error',
          buttons: [i18n.get('ok')],
          title: i18n.get('error'),
          message: i18n.get('functionDisabledUntilInitialized'),
        });
      }
    }
  });
}

function showDeleteDataDialog() {
  app.focus();

  const [CANCEL, DELETE] = [0, 1];
  dialog.showMessageBox({
    type: 'question',
    buttons: [i18n.get('cancel'), i18n.get('delete')],
    title: i18n.get('deleteDataDialogTitle'),
    message: i18n.get('deleteDataDialogMessage'),
    defaultId: CANCEL,
    cancelId: CANCEL,
  }, (response) => {
    if (response === DELETE) {
      RunebasePredictionDb.deleteRunebasePredictionData();
      app.quit();
    }
  });
}

function showAboutDialog() {
  app.focus();
  dialog.showMessageBox({
    type: 'question',
    buttons: [i18n.get('ok')],
    title: i18n.get('aboutDialogTitle'),
    message: `${i18n.get('version')}: ${version}\n${os.hostname()}`,
  });
}

function setupMenu() {
  const template = [
    {
      label: "Application",
      submenu: [
        { label: "Launch Runebase Wallet", click: () => showLaunchRunebaseWalletDialog() },
        { label: "Delete RunebasePrediction Data", click: () => showDeleteDataDialog() },
        { type: "separator" },
        { label: "About", click: () => showAboutDialog() },
        { type: "separator" },
        { label: "Quit", accelerator: "Command+Q", click: () => app.quit() },
      ]
    },
    {
      label: "Edit",
      submenu: [
        { label: "Undo", accelerator: "CmdOrCtrl+Z", selector: "undo:" },
        { label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:" },
        { type: "separator" },
        { label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:" },
        { label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:" },
        { label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:" },
        { label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:" },
      ]
    },
    {
      label: 'View',
      submenu: [
        {role: 'resetzoom'},
        {role: 'zoomin'},
        {role: 'zoomout'},
        {type: 'separator'},
        {role: 'togglefullscreen'}
      ]
    },
  ];
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

// Init BrowserWindow with loading page
function initBrowserWindow() {
  if (_.includes(process.argv, '--noui')) {
    return;
  }

  createWindow();
  setupMenu();
}

function loadUI() {
  if (_.includes(process.argv, '--noui')) {
    return;
  }

  // Host React static files
  const app = express();
  app.use(express.static(path.join(__dirname, './ui')));
  app.listen(UI_PORT);

  // Load React app
  uiWin.maximize();
  uiWin.loadURL(`http://localhost:${UI_PORT}`);
}

async function startBackend(blockchainEnv) {
  if (_.isEmpty(blockchainEnv)) {
    throw Error(`blockchainEnv cannot be empty.`);
  }

  await RunebasePredictionServer.startServer(blockchainEnv, getRunebaseExecPath(), encryptOk);
  initBrowserWindow();
}

function showUpdateDialog() {
  app.focus();

  const [CANCEL, DELETE] = [0, 1];
  dialog.showMessageBox({
    type: 'info',
    title: i18n.get('updateDialogTitle'),
    message: i18n.get('updateDialogMessage'),
    buttons: [i18n.get('cancel'), i18n.get('go')],
    defaultId: CANCEL,
    cancelId: CANCEL,
  }, (response) => {
    if (response === CANCEL) {
      showSelectEnvDialog();
    } else {
      shell.openExternal('https://www.runebase.io');
      app.quit();
    }
  });
}

// Check latest Github version to see if they should show the update dialog
async function checkLatestVersion() {
  try {
    const res = await axios.get('https://api.github.com/repos/runebase/runebase-prediction-app/releases');
    if (!_.isEmpty(res)) {
      // Parse package.json version
      const regex = RegExp(/(\d+.\d+.\d+)-(c\d+)-(d\d+)/g);
      const regexGroups = regex.exec(version);
      if (regexGroups === null) {
        throw Error('Error parsing version regex.');
      }

      const tagName = res.data[0].tag_name;
      if (regexGroups[1] !== tagName) {
        // New version available
        showUpdateDialog();
      } else {
        // Already on latest version
        showSelectEnvDialog();
      }
    } else {
      throw Error('Error fetching latest Github version.');
    }
  } catch (err) {
    console.error(err);
    showSelectEnvDialog();
  } 
}

// Show environment selection dialog
function showSelectEnvDialog() {
  app.focus();

  const [MAINNET, TESTNET, QUIT] = [0, 1, 2];
  dialog.showMessageBox({
    type: 'question',
    buttons: [i18n.get('mainnet'), i18n.get('testnet'), i18n.get('quit')],
    title: i18n.get('selectRunebaseEnvironment'),
    message: i18n.get('selectRunebaseEnvironment'),
    defaultId: QUIT,
    cancelId: QUIT,
  }, (response) => {
    switch (response) {
      case MAINNET: {
        if (testnetOnly) { // Testnet-only flag found
          dialog.showMessageBox({
            type: 'info',
            buttons: [],
            title: i18n.get('earlyAccessDialogTitle'),
            message: i18n.get('earlyAccessDialogMessage'),
          });
          showSelectEnvDialog();
        } else { // Mainnet/Testnet allowed
          startBackend(blockchainEnv.MAINNET);
          Tracking.mainnetStart();
        }
        break;
      }
      case TESTNET: {
        startBackend(blockchainEnv.TESTNET);
        Tracking.testnetStart();
        break;
      }
      case QUIT: {
        app.quit();
        return;
      }
      default: {
        throw Error(`Invalid dialog button selection ${response}`);
      }
    }
  });
}

function showErrorDialog(errMessage) {
  dialog.showMessageBox({
    type: 'error',
    buttons: [i18n.get('quit')],
    title: i18n.get('error'),
    message: errMessage,
  }, (response) => {
    app.quit();
  });
}

function showWalletErrorDialog(message) {
  const buttons = [i18n.get('quit')];

  if (message.includes('The wallet passphrase entered was incorrect.')) {
    buttons.push(i18n.get('retry'));
  }

  dialog.showMessageBox({
    type: 'error',
    title: i18n.get('error'),
    message,
    buttons,
    defaultId: 0,
    cancelId: 0,
  }, (response) => {
    if (response === 0) {
      app.quit();
    } else {
      showWalletUnlockPrompt();
    }
  });
}

function showWalletUnlockPrompt() {
  prompt({
    title: i18n.get('unlockWallet'),
    label: i18n.get('enterYourWalletPassphrase'),
    value: '',
    type: 'input',
    inputAttrs: { type: 'password' },
  }).then(async (res) => {
    // null if window was closed, or user clicked Cancel
    if (res === null) {
      app.quit();
    } else {
      if (_.isEmpty(res)) {
        throw Error('The wallet passphrase entered was incorrect.');
      }

      // Unlock wallet
      await Wallet.walletPassphrase({ passphrase: res, timeout: RunebasePredictionConfig.Config.UNLOCK_SECONDS });
      const info = await Wallet.getWalletInfo();
      if (info.unlocked_until > 0) {
        getLogger().info('Wallet unlocked');
        RunebasePredictionServer.startServices();
      } else {
        getLogger().error('Wallet unlock failed');
        throw Error(i18n.get('walletUnlockFailed'));
      }
    }
  }).catch((err) => {
    getLogger().error(err.message);
    showWalletErrorDialog(err.message);
  });
}

function startQtWallet() {
  setTimeout(() => require('runebase-prediction-server').RunebasePredictionServer.startRunebaseWallet(), 4000);
}

function handleExitSignal(signal) {
  try {
    getLogger().info(`Received ${signal}, exiting...`);
  } catch (err) {
    console.log(`Received ${signal}, exiting...`);
  }

  app.quit();
}

// Handle exit signals
process.on('SIGINT', handleExitSignal);
process.on('SIGTERM', handleExitSignal);
process.on('SIGHUP', handleExitSignal);

/* Electron Events */

// This method will be called when Electron has finished initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  // Must wait for app ready before app.getLocale() on Windows
  i18n = require('./src/localization/i18n');
  checkLatestVersion();
});

// Emitted when the application is activated.
app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (uiWin === null) {
    createWindow();
  }
});

// Emitted when all windows have been closed.
app.on('window-all-closed', () => {
  console.log('window-all-closed');
});

// Emitted before the application starts closing its windows.
app.on('before-quit', (event) => {
  console.log('before-quit');
});

// Emitted when all windows have been closed and the application will quit. 
app.on('will-quit', (event) => {
  console.log('will-quit');
  event.preventDefault();

  if (RunebasePredictionServer.getRunebaseProcess()) {
    dialog.showMessageBox({
      type: 'info',
      title: i18n.get('shutdownDialogTitle'),
      message: i18n.get('shutdownDialogMessage'),
      buttons: [i18n.get('ok')],
    }, () => {
      killRunebase(NORMAL);
    });
  } else {
    app.exit();
  }
});

/* Emitter Events */
// Show error dialog for any errors from startServer()
EmitterHelper.emitter.on(ipcEvent.SERVER_START_ERROR, (errMessage) => {
  showErrorDialog(errMessage);
});

// Show error dialog for any runebased start errors
EmitterHelper.emitter.on(ipcEvent.RUNEBASED_ERROR, (errMessage) => {
  showErrorDialog(errMessage);
});

// Delay, then start runebase-qt
EmitterHelper.emitter.on(ipcEvent.RUNEBASED_KILLED, () => {
  switch (killType) {
    case NORMAL: {
      app.exit();
      break;
    }
    case QT_WALLET: {
      startQtWallet();
      break;
    }
    default: {
      break;
    }
  }
});

// Load UI when services are running
EmitterHelper.emitter.once(ipcEvent.API_INITIALIZED, () => {
  loadUI();
});

// Show wallet unlock prompt if wallet is encrypted
EmitterHelper.emitter.on(ipcEvent.WALLET_ENCRYPTED, () => {
  showWalletUnlockPrompt();
});

// backup-wallet API called
EmitterHelper.emitter.on(ipcEvent.WALLET_BACKUP, (event) => {
  const options = {
    title: 'Backup Wallet',
    filters: [
      { name: 'backup', extensions: ['dat'] }
    ]
  }
  dialog.showSaveDialog(options, async (path) => {
    try {
      if (!_.isUndefined(path)) {
        await require('runebase-prediction-server').Wallet.backupWallet({ destination: path });
        const options = {
          type: 'info',
          title: 'Information',
          message: i18n.get('backupSuccess'),
          buttons: [i18n.get('ok')],
        };
        dialog.showMessageBox(options);
      }
    } catch (err) {
      const options = {
        type: 'error',
        title: i18n.get('error'),
        message: err.message,
        buttons: [i18n.get('ok')],
      };
      dialog.showMessageBox(options);
    }
  })
});

// import-wallet API called
EmitterHelper.emitter.on(ipcEvent.WALLET_IMPORT, (event) => {
  dialog.showOpenDialog({
    properties: ['openFile']
  }, async (files) => {
    try {
      if (!_.isEmpty(files)) {
        await require('runebase-prediction-server').Wallet.importWallet({ filename: files[0] });

        dialog.showMessageBox({
          type: 'info',
          title: 'Information',
          message: i18n.get('importSuccess'),
          buttons: [i18n.get('ok')],
        });
      }
    } catch (err) {
      dialog.showMessageBox({
        type: 'error',
        title: i18n.get('error'),
        message: err.message,
        buttons: [i18n.get('ok')],
      });
    }
  })
});
