// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
Cypress.Commands.add("logintoCRM",(url,username, password)=>
{
    cy.visit(url);
    cy.get("a[href='/signin']",{ timeout: 10000 }).click();
    cy.wait(3000);
    cy.get('#username',{ timeout: 10000 }).type(username);
    cy.get('input[ng-model="password"]').type(password);
    cy.get('#loginForm > .margin-0 > .btn',{ timeout: 10000 }).click();
    cy.wait(1000);

})

//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })