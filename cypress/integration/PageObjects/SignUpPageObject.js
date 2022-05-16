class SignUpPageObject
{

    isAtPovioPage()
    {
        return cy.get('h3')
    }

    clickOnSignUp()
    {
        return cy.get(':nth-child(2) > a')
    }

    clickSignIn()
    {
        return cy.get('.nav > :nth-child(1) > a')
    }

    isAtSignUpPage()
    {
        return cy.get('#new_user')
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

export default SignUpPageObject;