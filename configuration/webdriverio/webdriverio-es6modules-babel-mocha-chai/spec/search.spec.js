import { expect } from "chai";

describe("google search", () => {
  before(() => {
    browser.url("https://www.google.com/");
  });

  it("should be on google search page", async () => {
    const title = await browser.getTitle();
    expect(title).to.eq("Google");
  });

  it("should search for Cheese!", () => {
    const searchBox = $(".gLFyf.gsfi");
    expect(searchBox.isDisplayed()).to.eq(true);
    searchBox.addValue("Cheese!");

    const googleSearchButton = $(".gNO89b");
    googleSearchButton.waitForDisplayed(5000);
    googleSearchButton.click();
  });

  it('the page title should start with "Cheese!"', () => {
    const resultStats = $("#resultStats");
    resultStats.waitForDisplayed(5000);

    const title = browser.getTitle();
    const words = title.split(" ");
    expect(words[0]).to.eq("Cheese!");
  });
});
