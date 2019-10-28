exports.config = {
  runner: "local",
  path: "/",
  specs: ["./features/*.feature"],
  capabilities: [
    {
      browserName: "chrome"
    }
  ],
  services: ["chromedriver"],
  logLevel: "silent",
  framework: "cucumber",
  cucumberOpts: {
    require: ["./features/step_definitions/stepdefs.js"],
    timeout: 60000
  },
  reporters: ["dot"]
};
