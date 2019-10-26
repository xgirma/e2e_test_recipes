exports.config = {
  directConnect: true,
  specs: ["spec/*.spec.js"],
  capabilities: {
    browserName: "chrome"
  },
  framework: "jasmine",
  jasmineNodeOpts: {
    isVerbose: true,
    realtimeFailure: true
  },
  onPrepare: () => {
    /* eslint-disable-next-line global-require */
    require("@babel/register");
  }
};
