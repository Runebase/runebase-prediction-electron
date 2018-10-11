const Mixpanel = require('mixpanel');
const _ = require('lodash');
const os = require('os');
const { Utils } = require('runebase-prediction-server');

const MIXPANEL_TOKEN = '8ca400334e04c69fa1c47187a4be3074';

let mixpanel;

class Tracking {
  static track(eventName) {
    if (_.isEmpty(eventName)) {
      console.error('Mixpanel eventName cannot be empty');
      return;
    }

    // Instantiate if not instantiated yet
    if (!mixpanel) {
      mixpanel = Mixpanel.init(MIXPANEL_TOKEN);
    }

    // Only track in production build
    if (!Utils.isDevEnv()) {
      mixpanel.track(eventName, { id: getTrackingId() });
    }
  }

  static mainnetStart() {
    this.track('mainnet-start');
  }

  static testnetStart() {
    this.track('testnet-start');
  }
}

function getTrackingId() {
  return `${os.hostname()}.${os.userInfo().username}.${os.platform()}.${os.arch()}`;
}

module.exports = Tracking;
