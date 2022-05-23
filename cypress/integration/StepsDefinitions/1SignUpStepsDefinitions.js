// import 'cypress-file-upload';
import SignUpPageObject from "../PageObjects/SignUpPageObject.js";
import EditAccountPageObject from "../PageObjects/EditAccountPageObject";


Cypress.on('uncaught:exception', (err, runnable) => {
   // returning false here prevents Cypress from
   // failing the test
   debugger
   return false
})

const signUp = new SignUpPageObject()
const userAcc = new EditAccountPageObject()

beforeEach(() => {

    cy.fixture('signUp').then((data) => {
        this.data = data;
    })
    cy.visit('https://povio-at.herokuapp.com/')
    cy.signIn('user123@gmail.com', '12345678')

})


describe('Test Sign Up', () => {

   it(['SmokeTests', 'Tags'], 'Register new valid user', () => {
        signUp.signOut().click()
       signUp.isAtPovioPage().
       should('have.text', 'Welcome')

       signUp.clickOnSignUp().
       should('have.text', 'Sign up')
       .click()

       signUp.isAtSignUpPage()
           .should('be.visible')

       signUp.userNameInput().type(this.data.userName)
           .should('have.value', this.data.userName)

       signUp.emailInput().type(this.data.email)
           .should('have.value', this.data.email)

       signUp.passwordInput().type(this.data.password)
           .should('have.value', this.data.password)

       signUp.passwordConfirmationInput().type(this.data.passwordConfirm)
           .should('have.value', this.data.passwordConfirm)

       signUp.signUpButton().click()

       signUp.checkIfUserIsRegistered().should('have.text', 'Welcome! You have signed up successfully.')

        })


    it(['SmokeTests', 'Tags'], 'Try to register a new user with an already existing email', () => {
        signUp.signOut().click()
        signUp.isAtPovioPage().
        should('have.text', 'Welcome')

        signUp.clickOnSignUp().
        should('have.text', 'Sign up')

        signUp.clickOnSignUp().click()

        signUp.isAtSignUpPage()
            .should('be.visible')

        signUp.userNameInput().type(this.data.userName)
            .should('have.value', this.data.userName)

        signUp.emailInput().type(this.data.email)
            .should('have.value', this.data.email)

        signUp.passwordInput().type(this.data.password)
            .should('have.value', this.data.password)

        signUp.passwordConfirmationInput().type(this.data.passwordConfirm)
            .should('have.value', this.data.passwordConfirm)

        signUp.signUpButton().click()

        signUp.emailAlreadyTaken()
            .should('have.text', 'Email has already been taken')

    })


})



