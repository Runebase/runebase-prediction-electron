# Installation
1. `git clone https://github.com/runebase/runebase-prediction-electron.git`

2. Run `npm install` to install all dependencies.

# Run Dev Environment
  
    npm start           // With Electron UI window
    npm run start:noui  // Without Electron UI window

# Build Release Versions
We are currently using [Electron](https://github.com/electron/electron) and [Electron-Builder](https://github.com/electron-userland/electron-builder) to package our apps into native format depending on OS.

1. `npm install` to install all dependencies.

2. Run the build script for the appropriate OS:

        // Mainnet/Testnet build
        npm run build:mac // creates dmg
        npm run build:win // creates exe
        npm run build:lin // creates appimage

        // Testnet only build
        npm run build:mactest // creates dmg
        npm run build:wintest // creates exe
        npm run build:lintest // creates appimage

3. Run the executable

# Runebase-Prediction-Server
`runebase-prediction-server` is packaged as an NPM module to provide all the server logic to the Electron client. It is important to have the same version code in `package.json` as what is in `runebase-prediction-server's package.json`.

# Updating UI Files
1. In the runebase-prediction-ui repo, `npm run build` to build the UI files.

2. Copy all the files in `runebase-prediction-ui/build` folder to `runebase-prediction-electron/ui`
