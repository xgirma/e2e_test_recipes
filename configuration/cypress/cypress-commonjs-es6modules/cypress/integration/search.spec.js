const { searchWord } = require("../fixtures/example.json");

context("google search", () => {
  before(() => {
    cy.visit("https://www.google.com");
  });

  it("should be on google search page", () => {
    cy.title().should("eq", "Google");
  });

  it(`should search for ${searchWord}`, () => {
    cy.get(".gLFyf.gsfi").type(`${searchWord}{enter}`);
  });

  it(`the page title should start with ${searchWord}`, async () => {
    cy.title().should("contain", searchWord);
  });
});
