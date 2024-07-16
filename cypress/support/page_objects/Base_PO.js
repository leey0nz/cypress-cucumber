/// <reference types="cypress" />

class Base_PO {
  navigate(path) {
    cy.fixture("config.json").then((data) => {
      cy.visit(data.baseUrl + path);
    });
  }
  getPageTitle() {
    return cy.title();
  }
}
export default Base_PO;
