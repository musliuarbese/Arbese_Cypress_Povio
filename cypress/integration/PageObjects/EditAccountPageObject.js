class EditAccountPageObject
{

    clickOnEditAccount()
    {
        return cy.get('.nav > :nth-child(1) > a')
    }

    isAtEditAccPage()
    {
        return cy.get(':nth-child(1) > h3')
    }

    cancelMyAccButton()
    {
        return cy.get('.button_to > .button')
    }

    accountIsDeleted()
    {
        return cy.get('#flash_notice')
    }

    userNameInput()
    {
        return cy.get('#user_name')
    }

    emailInput()
    {
        return cy.get('#user_email')
    }

    passwordInput()
    {
        return cy.get('#user_password')
    }

    passwordConfirmationInput()
    {
        return cy.get('#user_password_confirmation')
    }

    signUpButton()
    {
        return cy.get('.button')
    }


    checkIfUserIsRegistered(){
        return cy.get('#flash_notice')
    }

    emailAlreadyTaken()
    {
        return cy.get('#error_explanation > ul > li')
    }

    signUpLink()
    {
        return cy.get(':nth-child(4) > .right')
    }

}

export default EditAccountPageObject;