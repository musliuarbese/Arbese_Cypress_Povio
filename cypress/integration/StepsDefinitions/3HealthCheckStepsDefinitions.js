// import 'cypress-file-upload';
import SignUpPageObject from "../PageObjects/SignUpPageObject.js";
import EditAccountPageObject from "../PageObjects/EditAccountPageObject.js";
import HealthCheckPageOject from "../PageObjects/HealthCheckPageOject";
import CampaignsPageObject from "../PageObjects/CampaignsPageObject";



Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    debugger
    return false
})

const signUp = new SignUpPageObject()
const healthCheck = new HealthCheckPageOject()
const editAccount = new EditAccountPageObject()
const campaigns = new CampaignsPageObject()
// beforeEach(() => {
//
//     cy.visit('https://povio-at.herokuapp.com/')
//     cy.signIn('userTest@test.com', 'Povio@123')
//
// })


describe('HealthCheck of App', () => {

    it(['SmokeTests', 'Tags'], 'Go to Home after logged in', () => {

        signUp.isAtPovioPage().
        should('have.text', 'Welcome')
        healthCheck.homePage().click()


    })

    it(['SmokeTests', 'Tags'], 'Go to Edit Account', () => {

        signUp.isAtPovioPage().
        should('have.text', 'Welcome')
        editAccount.clickOnEditAccount().click()

    })

    it(['SmokeTests', 'Tags'], 'Go to Campaigns', () => {

        signUp.isAtPovioPage().
        should('have.text', 'Welcome')
        campaigns.clickOnCampaigns().click()

    })

    it(['SmokeTests', 'Tags'], 'Go to SignOut', () => {

        signUp.isAtPovioPage().
        should('have.text', 'Welcome')
        healthCheck.signOut().click()

    })

    it(['SmokeTests', 'Tags'], 'Check povio logo', () => {

        signUp.isAtPovioPage().
        should('have.text', 'Welcome')
        healthCheck.povio().click()


    })


})



