const { ExpectedConditions, Key } = require("protractor");
const assert = require("assert");

describe("google search", () => {
  it("should be on google search page", async () => {
    browser.waitForAngularEnabled(false);
    browser.get("https://www.google.com/");
    const title = await browser.getTitle();
    assert.strictEqual(title, "Google");
  });

  it("should search for Cheese!", async () => {
    const searchBox = element(by.name("q"));
    assert(await searchBox.isDisplayed());
    searchBox.sendKeys("Cheese!", Key.ENTER);
  });

  it('the page title should start with "Cheese!"', async () => {
    browser.wait(ExpectedConditions.urlContains("search"), 5000);

    const title = await browser.getTitle();
    const words = title.split(" ");
    assert.strictEqual(words[0], "Cheese!");
  });
});
