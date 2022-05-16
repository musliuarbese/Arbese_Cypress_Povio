// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
// import 'cypress-file-upload';


Cypress.Commands.add("signIn", (email, password) => {
    cy.get('.nav > :nth-child(1) > a').should('have.text', 'Sign in')
    cy.get('.nav > :nth-child(1) > a').click()
    cy.get('#new_user').should('be.visible')
    cy.get('#user_email').type(email)
        .should('have.value', email)
    cy.get('#user_password').type(password)
        .should('have.value', password)
    cy.get('#user_remember_me').click()
    cy.get('.button').click()
    cy.get('#flash_notice').should('have.text', 'Signed in successfully.')
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
