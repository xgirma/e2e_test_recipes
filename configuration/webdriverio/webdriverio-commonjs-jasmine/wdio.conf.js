exports.config = {
  runner: "local",
  path: "/",
  specs: ["./spec/*.spec.js"],
  capabilities: [
    {
      browserName: "chrome"
    }
  ],
  logLevel: "silent",
  baseUrl: "https://www.google.com",
  services: ["chromedriver"],
  framework: "jasmine",
  reporters: ["dot"],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000
  }
};
