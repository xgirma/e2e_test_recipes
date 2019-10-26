const { ExpectedConditions, Key } = require("protractor");

describe("google search", () => {
  beforeAll(() => {
    browser.waitForAngularEnabled(false);
    browser.get("https://www.google.com/");
  });

  it("should be on google search page", async () => {
    const title = await browser.getTitle();
    expect(title).toEqual("Google");
  });

  it("should search for Cheese!", () => {
    const searchBox = element(by.name("q"));
    expect(searchBox.isDisplayed()).toBe(true);
    searchBox.sendKeys("Cheese!", Key.ENTER);
  });

  it('the page title should start with "Cheese!"', async () => {
    browser.wait(ExpectedConditions.urlContains("search"), 5000);

    const title = await browser.getTitle();
    const words = title.split(" ");
    expect(words[0]).toEqual("Cheese!");
  });
});
