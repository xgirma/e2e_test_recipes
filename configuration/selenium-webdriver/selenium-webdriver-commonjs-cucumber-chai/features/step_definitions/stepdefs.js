const { Given, When, Then, AfterAll, BeforeAll } = require("cucumber");
const { Builder, By, Capabilities, Key, until } = require("selenium-webdriver");
const { expect } = require("chai");

require("chromedriver");

const capabilities = Capabilities.chrome();
capabilities.set("chromeOptions", { w3c: false });
const driver = new Builder().withCapabilities(capabilities).build();

BeforeAll("start", async () => {
  await driver.get("https://www.google.com");
});

AfterAll("end", async () => {
  await driver.quit();
});

Given("I am on the Google search page", async () => {
  const element = await driver.findElement(By.name("q"));
  await driver.wait(until.elementIsVisible(element), 5000);

  const title = await driver.getTitle();
  expect(title).to.equal("Google");
});

When("I search for {string}", async searchWord => {
  const element = await driver.findElement(By.name("q"));
  element.sendKeys(searchWord, Key.RETURN);
  element.submit();
});

Then("the page title should start with {string}", async searchWord => {
  await driver.wait(until.urlContains("search"), 5000);

  const title = await driver.getTitle();
  const words = title.split(" ");
  expect(words[0]).to.equal(searchWord);
});
