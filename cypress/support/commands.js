// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
// import 'cypress-file-upload';


Cypress.Commands.add("signUp", (username, password) => {
    cy.get('.mr-3 > .HeaderMenu-link').click()
    cy.get('h1').should('have.text', 'Sign in to GitHub')
    cy.get('#login_field').type(username)
    cy.get('#password').type(password)
    cy.get('.btn').click()
})

Cypress.Commands.add("loginBMS", (username, password) => {
    cy.get('.title-font').should('contain', 'QA Detroit Client')
    cy.get('input[name="email"]').type(username)
    cy.get('input[name="password"]').type(password)
    cy.get('button[type="submit"]').click()
})



//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
