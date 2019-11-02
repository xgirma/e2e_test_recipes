describe("google search", () => {
  before(() => {
    cy.visit("https://www.google.com");
  });

  it("should be on google search page", () => {
    cy.title().should("eq", "Google");
  });

  it(`should search for Cheese!`, () => {
    cy.fixture("data.json").then(data => {
      cy.get(".gLFyf.gsfi").type(`${data.searchWord}{enter}`);
    });
  });

  it(`the page title should start with Cheese!`, async () => {
    cy.fixture("data.json")
      .as("data.json")
      .then(data => {
        cy.title().should("contain", data.searchWord);
      });
  });
});
