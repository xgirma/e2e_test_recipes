exports.config = {
  directConnect: true,
  specs: ["./features/*.feature"],
  capabilities: {
    browserName: "chrome"
  },
  framework: "custom",
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: [
      './features/step_definitions/stepdefs.js'
    ]
  }
};
