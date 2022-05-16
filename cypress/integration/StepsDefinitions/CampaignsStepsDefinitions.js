// import 'cypress-file-upload';
import CampaignsPageObject from "../PageObjects/CampaignsPageObject.js";


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    debugger
    return false
})

const campaign = new CampaignsPageObject()

beforeEach(() => {

    cy.fixture('campaigns').then((data) => {
        this.data = data;
    })
    cy.visit('https://povio-at.herokuapp.com/')
    cy.signIn('userTest@test.com', 'Povio@123')

})


describe('Test Campaigns Page as a logged-in user', () => {

    it(['SmokeTests', 'Tags'], 'Add New Campaign using One time option', () => {

        campaign.clickOnCampaigns()
            .should('have.text', 'Campaigns')
        campaign.clickOnCampaigns().click()

        campaign.isAtCampaignPage()
            .should('have.text', 'Campaigns')
        campaign.addNewCampaignButton()
            .should('have.text', 'Add New Campaign')
            .click()

        campaign.isAtAddCampaignForm().should('be.visible')

        campaign.campaignNameInput().type(this.data.name)
            .should('have.value', this.data.name)

        campaign.campaignDescInput().type(this.data.description)
            .should('have.value', this.data.description)

        campaign.oneTimeOption().click()
        campaign.oneTimeText()
            .should('have.text', '\n        \n        One time\n      ')
        campaign.createCampaignButton().click()

        campaign.campaignIsCreated()
            .should('have.text', 'Campaign was successfully created.')


    })

    it(['SmokeTests', 'Tags'], 'Add New Campaign using Repeatable option', () => {

        campaign.clickOnCampaigns()
            .should('have.text', 'Campaigns')
        campaign.clickOnCampaigns().click()

        campaign.isAtCampaignPage()
            .should('have.text', 'Campaigns')
        campaign.addNewCampaignButton()
            .should('have.text', 'Add New Campaign')
            .click()

        campaign.isAtAddCampaignForm().should('be.visible')

        campaign.campaignNameInput().type(this.data.name2)
            .should('have.value', this.data.name2)

        campaign.campaignDescInput().type(this.data.description2)
            .should('have.value', this.data.description2)

        campaign.repeatableOption().click()
        campaign.repeatableText()
            .should('have.text', '\n        \n        Repeatable\n      ')
        campaign.createCampaignButton().click()

        campaign.campaignIsCreated()
            .should('have.text', 'Campaign was successfully created.')


    })

    it(['SmokeTests', 'Tags'], 'Add New Campaign using One time option after added first Campaign', () => {

        campaign.clickOnCampaigns()
            .should('have.text', 'Campaigns')
        campaign.clickOnCampaigns().click()

        campaign.isAtCampaignPage()
            .should('have.text', 'Campaigns')
        campaign.addNewCampaign2()
            .should('have.text', 'Add New Campaign')
            .click()

        campaign.isAtAddCampaignForm().should('be.visible')

        campaign.campaignNameInput().type(this.data.name3)
            .should('have.value', this.data.name3)

        campaign.campaignDescInput().type(this.data.description3)
            .should('have.value', this.data.description3)

        campaign.oneTimeOption().click()
        campaign.oneTimeText()
            .should('have.text', '\n        \n        One time\n      ')
        campaign.createCampaignButton().click()

        campaign.campaignIsCreated()
            .should('have.text', 'Campaign was successfully created.')


    })


    it(['SmokeTests', 'Tags'], 'Add New Campaign using Repeatable option after added second Campaign', () => {

        campaign.clickOnCampaigns()
            .should('have.text', 'Campaigns')
        campaign.clickOnCampaigns().click()

        campaign.isAtCampaignPage()
            .should('have.text', 'Campaigns')
        campaign.addNewCampaign2()
            .should('have.text', 'Add New Campaign')
            .click()

        campaign.isAtAddCampaignForm().should('be.visible')

        campaign.campaignNameInput().type(this.data.name4)
            .should('have.value', this.data.name4)

        campaign.campaignDescInput().type(this.data.description4)
            .should('have.value', this.data.description4)

        campaign.repeatableOption().click()
        campaign.repeatableText()
            .should('have.text', '\n        \n        Repeatable\n      ')
        campaign.createCampaignButton().click()

        campaign.campaignIsCreated()
            .should('have.text', 'Campaign was successfully created.')


    })

    it(['SmokeTests', 'Tags'], 'Destroy added Campaigns', () => {

        campaign.clickOnCampaigns()
            .should('have.text', 'Campaigns')
        campaign.clickOnCampaigns().click()

        campaign.isAtCampaignPage()
            .should('have.text', 'Campaigns')

        campaign.destroyCampaigneButton().
        should('have.text', 'Destroy')
            .click()

        campaign.campaignIsDestroyed()
            .should('have.text', 'Campaign was successfully destroyed.')


        campaign.destroyCampaigneButton1().
        should('have.text', 'Destroy')
            .click()

        campaign.campaignIsDestroyed()
            .should('have.text', 'Campaign was successfully destroyed.')


        campaign.destroyCampaigneButton().
        should('have.text', 'Destroy')
            .click()

        campaign.campaignIsDestroyed()
            .should('have.text', 'Campaign was successfully destroyed.')


    })


})



