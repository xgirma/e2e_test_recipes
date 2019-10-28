const { Given, When, Then, BeforeAll } = require("cucumber");
const assert = require("assert");

let searchBox;

BeforeAll(() => {
  browser.url("https://www.google.com/");
});

Given("I am on the Google search page", () => {
  searchBox = $(".gLFyf.gsfi");
  searchBox.waitForDisplayed(5000);

  const title = browser.getTitle();
  assert.strictEqual(title, "Google");
});

When("I search for {string}", searchWord => {
  assert.strictEqual(searchBox.isDisplayed(), true);
  searchBox.addValue(searchWord);

  const googleSearchButton = $(".gNO89b");
  googleSearchButton.waitForDisplayed(5000);
  googleSearchButton.click();
});

Then("the page title should start with {string}", searchWord => {
  const resultStats = $("#resultStats");
  resultStats.waitForDisplayed(5000);

  const title = browser.getTitle();
  const words = title.split(" ");
  assert.strictEqual(words[0], searchWord);
});
