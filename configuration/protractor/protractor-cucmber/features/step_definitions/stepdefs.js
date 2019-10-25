const { Given, When, Then, BeforeAll } = require("cucumber");
const { expect } = require("chai");

BeforeAll(() => {
  browser.waitForAngularEnabled(false);
  browser.get("https://www.google.com/");
});

Given(/^I am on the Google search page$/, function () {
  const title = browser.getTitle();
  expect(title).to.equal("Google");
});

When("I search for {string}", searchWord => {
  const searchBox = element(by.name("q"));
  expect(searchBox.isDisplayed()).to.equal(true);
  searchBox.sendKeys(searchWord, protractor.Key.ENTER);
});

Then("the page title should start with {string}", searchWord => {
  const title = browser.getTitle();
  const isTitleStartWithCheese = title.lastIndexOf("Cheese!", 0) === 0;
  expect(isTitleStartWithCheese).to.equal(true);
  }
);
