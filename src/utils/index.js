const _ = require('lodash');
const { Utils } = require('runebase-prediction-server');

/*
* Gets the prod env runebase exec path.
* return {String} The full prod path for the exec file.
*/
const getProdRunebaseExecPath = () => {
  const platform = process.platform;
  const arch = process.arch;
  let osFolder;

  switch (platform) {
    case 'darwin': {
      osFolder = 'mac';
      break;
    }
    case 'linux': {
      if (arch === 'x64') {
        osFolder = 'linux64';
      } else if (arch === 'x32') {
        osFolder = 'linux32';
      } else {
        throw Error(`Linux arch ${arch} not supported.`);
      }
      break;
    }
    case 'win32': {
      osFolder = arch === 'x64' ? 'win64' : 'win32';
      break;
    }
    default: {
      throw Error('Operating system not supported.');
    }
  }

  const { app } = require('electron'); // eslint-disable-line global-require
  const path = `${app.getAppPath()}/node_modules/runebase-prediction-server/runebase/${osFolder}/bin`;
  return path.replace('app.asar', 'app.asar.unpacked');
};

/*
* Returns the path for the Runebase binaries folder.
*/
const getRunebaseExecPath = () => {
  let runebaseExecPath;
  if (Utils.isDevEnv()) {
    runebaseExecPath = Utils.getDevRunebaseExecPath();
  } else {
    runebaseExecPath = getProdRunebaseExecPath();
  }

  if (_.isEmpty(runebaseExecPath)) {
    throw Error('runebaseExecPath cannot be empty.');
  }
  return runebaseExecPath;
};

module.exports = {
  getRunebaseExecPath,
};
