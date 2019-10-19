const protractor = require("protractor");

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
    searchBox.sendKeys("Cheese!", protractor.Key.ENTER);
  });

  it('the page title should start with "Cheese!"', async () => {
    const title = await browser.getTitle();
    const isTitleStartWithCheese = title.lastIndexOf("Cheese!", 0) === 0;
    expect(isTitleStartWithCheese).toBe(true);
  });
});
