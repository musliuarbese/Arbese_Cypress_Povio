// import 'cypress-file-upload';
import SignUpPageObject from "../PageObjects/SignUpPageObject.js";
import EditAccountPageObject from "../PageObjects/EditAccountPageObject.js";



Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    debugger
    return false
})

const signUp = new SignUpPageObject()
const userAcc = new EditAccountPageObject()

beforeEach(() => {

    cy.visit('https://povio-at.herokuapp.com/')
    cy.signIn('userTest@test.com', 'Povio@123')

})


describe('Test Cancel My Account', () => {

    it(['SmokeTests', 'Tags'], 'Check if user can cancel its own account', () => {

        signUp.isAtPovioPage().
        should('have.text', 'Welcome')

        userAcc.clickOnEditAccount()
            .should('have.text', 'Edit account')
            .click()

        userAcc.isAtEditAccPage()
            .should('have.text', 'Edit User')

        userAcc.cancelMyAccButton().click()

        userAcc.accountIsDeleted()
            .should('have.text', 'Bye! Your account has been successfully cancelled. We hope to see you again soon.')

        userAcc.clickOnEditAccount()
            .should('not.be.visible')


    })



})



