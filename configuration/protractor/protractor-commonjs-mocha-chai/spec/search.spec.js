const { Key, ExpectedConditions } = require("protractor");
const { expect } = require("chai");

describe("google search", () => {
  before(() => {
    browser.waitForAngularEnabled(false);
    browser.get("https://www.google.com/");
  });

  it("should be on google search page", async () => {
    const title = await browser.getTitle();
    expect(title).to.equal("Google");
  });

  it("should search for Cheese!", async () => {
    const searchBox = await element(by.name("q"));
    // eslint-disable-next-line no-unused-expressions
    expect(await searchBox.isDisplayed()).to.be.true;
    searchBox.sendKeys("Cheese!", Key.ENTER);
  });

  it('the page title should start with "Cheese!"', async () => {
    browser.wait(ExpectedConditions.urlContains("search"), 5000);

    const title = await browser.getTitle();
    const words = title.split(" ");
    expect(words[0]).to.equal("Cheese!");
  });
});
