const { Given, When, Then, AfterAll } = require('cucumber');
const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
const { expect } = require('chai');

require("chromedriver");

const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { "w3c": false });
const driver = new Builder().withCapabilities(capabilities).build();

Given('I am on the Google search page', async function () {
    await driver.get('http://www.google.com');
});

When('I search for {string}', async function (searchKey) {
    const element = await driver.findElement(By.name('q'));
    element.sendKeys(searchKey, Key.RETURN);
    element.submit();
});

Then('the page title should start with {string}', {timeout: 60 * 1000}, async function (searchKey) {
    const title = await driver.getTitle();
    const isTitleStartWithCheese = title.toLowerCase().lastIndexOf(`${searchKey}`, 0) === 0;
    expect(isTitleStartWithCheese).to.equal(true);
});

AfterAll('end', async function(){
    await driver.quit();
});
