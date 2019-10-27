/* eslint-disable no-unused-expressions */
const {
  Given,
  When,
  Then,
  BeforeAll,
  AfterAll,
  setDefaultTimeout
} = require("cucumber");
const puppeteer = require("puppeteer");
const { expect } = require("chai");

let page;
let browser;
const searchBox = ".gLFyf.gsfi";

setDefaultTimeout(50 * 1000);

BeforeAll(async () => {
  browser = await puppeteer.launch({ headless: false });
  page = await browser.newPage();

  await Promise.race([
    page
      .goto("https://www.google.com", { waitUntil: "networkidle0" })
      .catch(() => {}),
    page.waitFor("body", { timeout: 6000 }).catch(() => {})
  ]);
});

AfterAll(() => {
  if (!page.isClosed()) {
    browser.close();
  }
});

Given("I am on the Google search page", async () => {
  await page.waitFor(searchBox);
  const title = await page.title();
  expect(title).to.equal("Google");
});

When("I search for {string}", async searchWord => {
  expect(!!(await page.$(searchBox))).to.be.true;
  await page.type(searchBox, searchWord, { delay: 100 });
  await page.keyboard.press("\n");
});

Then("the page title should start with {string}", async searchWord => {
  await page.waitFor("#resultStats");

  const title = await page.title();
  const words = title.split(" ");
  expect(words[0]).to.equal(searchWord);
});
