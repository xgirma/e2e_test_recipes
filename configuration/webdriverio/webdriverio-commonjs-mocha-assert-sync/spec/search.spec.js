const assert = require("assert");

let searchBox;

describe("google search", () => {
  before(() => {
    browser.url("https://www.google.com/");
  });

  it("should be on google search page", () => {
    searchBox = $(".gLFyf.gsfi");

    const title = browser.getTitle();
    assert.strictEqual(title, "Google");
  });

  it("should search for Cheese!", () => {
    assert.strictEqual(searchBox.isDisplayed(), true);
    searchBox.addValue("Cheese!");
    const googleSearchButton = $(".gNO89b");
    googleSearchButton.click();
  });

  it('the page title should start with "Cheese!"', () => {
    const resultStats = $("#resultStats");
    resultStats.waitForDisplayed(5000);

    const title = browser.getTitle();
    const isTitleStartWithCheese = title.lastIndexOf("Cheese!", 0) === 0;
    assert.strictEqual(isTitleStartWithCheese, true);
  });
});
