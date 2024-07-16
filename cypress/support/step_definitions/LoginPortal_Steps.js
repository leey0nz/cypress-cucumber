/// <reference types='cypress' />
import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import Login_PO from "../page_objects/Login_PO";

const loginPage = new Login_PO();
let stub;

Given("I navigate to the webdriveruniversity login page", () => {
  loginPage.navigateTo_Login_Page();
});
// loginPage.navigateTo_Login_Page("");

When(
  "I type a username {string} and  password {string}",
  (userName, passWord) => {
    stub = cy.stub();
    // cy.get("#text").type(userName);
    // cy.get("#password").type(passWord);
    loginPage.type_Username(userName);
    loginPage.type_Password(passWord);
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
  // cy.get("#login-button").click();
  loginPage.clickOn_Login_Button();
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

// /// <reference types='cypress' />
// import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
// import Login_PO from "../page_objects/Login_PO";

// const loginPage = new Login_PO();
// let stub;

// Given("I navigate to the webdriveruniversity login page", () => {
//   loginPage.navigateTo_Login_Page();
// });

// When(
//   "I type a username {string} and  password {string}",
//   (username, password) => {
//     stub = cy.stub();
//     // cy.get("#text").type(userName);
//     // cy.get("#password").type(passWord);
//     loginPage.type_Username(username);
//     loginPage.type_Password(password);
//   }
// );

// When(
//   "I type a invalid username {string} and password {string}",
//   (invaldUserName, invalidPassWord) => {
//     if (invaldUserName) {
//       cy.get("#text").clear().type(invaldUserName);
//     } else {
//       cy.get("#text").clear();
//     }

//     if (invalidPassWord) {
//       cy.get("#password").clear().type(invalidPassWord);
//     } else {
//       cy.get("#password").clear();
//     }
//   }
// );

// When("I click on the login button", () => {
//   cy.on("window:alert", stub);
//   // cy.get("#login-button").click();
//   loginPage.clickOn_Login_Button();
// });

// Then(
//   "I should be presented with a successful login portal submission {string}",
//   (message) => {
//     expect(stub).to.have.been.calledWith(message);
//   }
// );

// Then(
//   "I should be presented with a unsuccessful login portal submission {string}",
//   (message) => {
//     expect(stub).to.have.been.calledWith(message);
//   }
// );
