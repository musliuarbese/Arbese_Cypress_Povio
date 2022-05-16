class LoginPageObject
{

    moodleLoginPage()
    {
        return cy.contains('Kolegji UBT - Moodle')
    }

    googleSignInButton()
    {
        return cy.get('.potentialidp > .btn')
    }

}

export default LoginPageObject;