exports.config = {
  runner: "local",
  path: "/",
  specs: ["./spec/*.spec.js"],
  capabilities: [
    {
      browserName: "chrome"
    }
  ],
  services: ["chromedriver"],
  logLevel: "silent",
  framework: "mocha",
  reporters: ["dot"],
  mochaOpts: {
    timeout: 60000
  }
};
