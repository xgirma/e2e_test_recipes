const protractor = require("protractor");
const assert = require("assert");

describe("google search", () => {
  it("should be on google search page", async () => {
    browser.waitForAngularEnabled(false);
    browser.get("https://www.google.com/");
    const title = await browser.getTitle();
    assert.strictEqual(title, "Google");
  });

  it("should search for Cheese!", () => {
    const searchBox = element(by.name("q"));
    assert.ok(searchBox.isDisplayed());
    searchBox.sendKeys("Cheese!", protractor.Key.ENTER);
  });

  it('the page title should start with "Cheese!"', async () => {
    const title = await browser.getTitle();
    const isTitleStartWithCheese = title.lastIndexOf("Cheese!", 0) === 0;
    assert.ok(isTitleStartWithCheese);
  });
});
