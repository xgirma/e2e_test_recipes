const { expect } = require("chai");
const { Builder, By, Key, until } = require("selenium-webdriver");
require("chromedriver");

describe("google Search", () => {
  let browser;

  before(async () => {
    browser = await new Builder().forBrowser("chrome").build();
    browser.get("https://www.google.com");
  });

  after(() => {
    browser.quit();
  });

  it("should be on google search page", async () => {
    const searchBox = await browser.findElement(By.name("q"));
    await browser.wait(until.elementIsVisible(searchBox), 5000);

    const title = await browser.getTitle();
    expect(title).to.equal("Google");
  });

  it("should search for Cheese!", async () => {
    const searchBox = await browser.findElement(By.name("q"));
    // eslint-disable-next-line no-unused-expressions
    expect(await searchBox.isDisplayed()).to.be.true;
    searchBox.sendKeys("Cheese!", Key.ENTER);
  });

  it('the page title should start with "Cheese!"', async () => {
    await browser.wait(until.urlContains("search"), 5000);

    const title = await browser.getTitle();
    const words = title.split(" ");
    expect(words[0]).to.equal("Cheese!");
  });
});
