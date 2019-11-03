/* eslint-disable-next-line global-require */
require("@babel/register");

module.exports = (function(settings) {
  // eslint-disable-next-line no-param-reassign
  settings.test_workers = false;
  return settings;
})(require("./nightwatch.json"));
