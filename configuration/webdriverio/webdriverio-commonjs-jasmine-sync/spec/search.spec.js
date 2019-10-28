let searchBox;

describe("google search", () => {
  beforeAll(() => {
    browser.url("https://www.google.com/");
  });

  it("should be on google search page", () => {
    searchBox = $(".gLFyf.gsfi");
    searchBox.waitForDisplayed(5000);

    const title = browser.getTitle();
    expect(title).toEqual("Google");
  });

  it("should search for Cheese!", () => {
    expect(searchBox.isDisplayed()).toBe(true);
    searchBox.addValue("Cheese!");

    const googleSearchButton = $(".gNO89b");
    googleSearchButton.waitForDisplayed(5000);
    googleSearchButton.click();
  });

  it('the page title should start with "Cheese!"', () => {
    const resultStats = $("#resultStats");
    resultStats.waitForDisplayed(5000);

    const title = browser.getTitle();
    const isTitleStartWithCheese = title.lastIndexOf("Cheese!", 0) === 0;
    expect(isTitleStartWithCheese).toBe(true);
  });
});
