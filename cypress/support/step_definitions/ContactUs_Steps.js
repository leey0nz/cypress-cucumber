/// <reference types="cypress" />
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I type a first name", () => {
  cy.get('[name="first_name"]').type("Tuan");
});

When("I type a last name", () => {
  cy.get('[name="last_name"]').type("Trinh");
});

When("I enter an email address", () => {
  cy.get('[name="email"]').type("tuan.trinh@maill.com");
});

When("I type a comment", () => {
  cy.get("textarea.feedback-input").type("Hello everyone!");
});

When("I click on the submit button", () => {
  cy.get('[type="submit"]').click();
});

Then(
  "I should be presented with a successful contact us submission message",
  () => {
    cy.get("h1").should("have.text", "Thank You for your Message!");
  }
);

Then(
  "I should be presented with a unsuccessful contact us submission message",
  () => {
    cy.get("body").contains("Error: Invalid email address");
  }
);

When("I type a specific first name {string}", (firstName) => {
  cy.get('[name="first_name"]').type(firstName);
});
When("I type a specific last name {string}", (lastName) => {
  cy.get('[name="last_name"]').type(lastName);
});
When("I type a specific email address {string}", (email) => {
  cy.get('[name="email"]').type(email);
});
When(
  "I type a specific word {string} and number {int} within the comment input field",
  (word, number) => {
    cy.get("textarea.feedback-input").type(word + number);
  }
);
When(
  "I type a first name {word} and a last name {string}",
  (firstName, lastName) => {
    cy.get('[name="first_name"]').type(firstName);
    cy.get('[name="last_name"]').type(lastName);
  }
);
When("I type a {string} and a comment {string}", (email, comment) => {
  cy.get('[name="email"]').type(email);
  cy.get("textarea.feedback-input").type(comment);
});
Then("I should be presented with header text {string}", (message) => {
  cy.xpath("//h1 | //body").contains(message);
});
