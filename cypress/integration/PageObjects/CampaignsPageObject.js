class CampaignsPageObject
{

    clickOnCampaigns()
    {
        return cy.get(':nth-child(2) > a')
    }

    isAtCampaignPage()
    {
        return cy.get('h3')
    }

    addNewCampaignButton()
    {
        return cy.get('.container > a')
    }

    isAtAddCampaignForm()
    {
        return cy.get('form')
    }

    campaignNameInput()
    {
        return cy.get(':nth-child(3) > .form-control')
    }

    editCampaignNameInput()
    {
        return cy.get(':nth-child(4) > .form-control')
    }

    campaignDescInput()
    {
        return cy.get(':nth-child(4) > .form-control')
    }

    editCampaignDescInput()
    {
        return cy.get(':nth-child(5) > .form-control')
    }

    oneTimeOption()
    {
        return cy.get(':nth-child(6) > label > input')
    }

    oneTimeOption2()
    {
        return cy.get(':nth-child(7) > label > input')
    }

    repeatableOption()
    {
        return cy.get(':nth-child(7) > label > input')
    }

    repeatableOption2()
    {
        return cy.get(':nth-child(8) > label > input')
    }

    createCampaignButton()
    {
        return cy.get('.button')
    }


    oneTimeText(){
        return cy.get(':nth-child(6) > label')
    }

    oneTimeText2(){
        return cy.get(':nth-child(7) > label')
    }

    campaignIsCreated()
    {
        return cy.get('#flash_notice')
    }

    campaignIsDestroyed()
    {
        return cy.get('#flash_notice')
    }

    campaignIsUpdated()
    {
        return cy.get('#flash_notice')
    }

    editCampaignButton()
    {
        return cy.get('tr > :nth-child(3) > a')
    }

    destroyCampaigneButton()
    {
        return cy.get(':nth-child(2) > :nth-child(4) > a')
    }

    destroyCampaigneButton1()
    {
        return cy.get(':nth-child(3) > :nth-child(4) > a')
    }


    repeatableText()
    {
        return cy.get(':nth-child(7) > label')

    }

    repeatableText2()
    {
        return cy.get(':nth-child(8) > label')

    }

    addNewCampaign2()
    {
        return cy.get('[href="/campaigns/new"]')
    }

    firstDestroyCampaigneButton()
    {
        return cy.get(':nth-child(4) > a')
    }
}

export default CampaignsPageObject;