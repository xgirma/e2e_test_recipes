const { expect } = require("chai");

module.exports = {
  before: browser => {
    browser.url("https://www.google.com");
  },

  after: browser => {
    browser.end();
  },

  "should be on google search page": function(browser) {
    browser
      .waitForElementVisible("body", 1000)
      .getTitle(title => {
        expect(title).to.equal("Google");
      })
      .assert.title("Google");
  },

  "should search for Cheese!": function(browser) {
    browser
      .waitForElementVisible(".gLFyf.gsfi", 1000)
      .isVisible(".gLFyf.gsfi", isDisplayed => {
        // eslint-disable-next-line no-unused-expressions
        expect(isDisplayed.value).to.be.true;
      })
      .setValue("input[type=text]", "Cheese!")
      .waitForElementVisible("input[name=btnK]", 1000)
      .click("input[name=btnK]");
  },

  'the page title should start with "Cheese!': function(browser) {
    browser
      .waitForElementVisible("#resultStats", 1000)
      .pause(1000)
      .getTitle(title => {
        const words = title.split(" ");
        expect(words[0]).to.equal("Cheese!");
      });
  }
};
