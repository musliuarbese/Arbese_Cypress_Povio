class HealthCheckPageOject
{

    homePage()
    {
        return cy.contains('Home')
    }

    signOut()
    {
        return cy.get(':nth-child(3) > a')
    }

    povio()
    {
        return cy.get('svg')
    }

}

export default HealthCheckPageOject;