exports.config = {
  directConnect: true,
  specs: ["spec/*.spec.js"],
  capabilities: {
    browserName: "chrome"
  },
  framework: "mocha",
  mochaOpts: {
    reporter: "spec",
    slow: 3000
  }
};
