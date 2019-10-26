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

setDefaultTimeout(50 * 1000);

BeforeAll(async () => {
  browser = await puppeteer.launch({ headless: false });
  page = await browser.newPage();
  await page.goto("https://www.google.com", { waitUntil: "networkidle0" });
});

AfterAll(() => {
  if (!page.isClosed()) {
    browser.close();
  }
});

Given("I am on the Google search page", async () => {
  const title = await page.title();
  expect(title).to.equal("Google");
});

When("I search for {string}", async searchWord => {
  const searchBox = ".gLFyf.gsfi";
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
