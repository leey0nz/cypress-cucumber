/// <reference types='cypress' />
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

let stub;

When(
  "I type a username {string} and  password {string}",
  (userName, passWord) => {
    stub = cy.stub();
    cy.get("#text").type(userName);
    cy.get("#password").type(passWord);
  }
);

When(
  "I type a invalid username {string} and password {string}",
  (invaldUserName, invalidPassWord) => {
    if (invaldUserName) {
      cy.get("#text").clear().type(invaldUserName);
    } else {
      cy.get("#text").clear();
    }

    if (invalidPassWord) {
      cy.get("#password").clear().type(invalidPassWord);
    } else {
      cy.get("#password").clear();
    }
  }
);

When("I click on the login button", () => {
  cy.on("window:alert", stub);
  cy.get("#login-button").click();
});

Then(
  "I should be presented with a successful login portal submission {string}",
  (message) => {
    expect(stub).to.have.been.calledWith(message);
  }
);

Then(
  "I should be presented with a unsuccessful login portal submission {string}",
  (message) => {
    expect(stub).to.have.been.calledWith(message);
  }
);
