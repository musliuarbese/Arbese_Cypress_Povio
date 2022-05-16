import LoginPageObject from "../pageObjects/LoginPageObject";

 Cypress.on('uncaught:exception', (err, runnable) => {
     // returning false here prevents Cypress from
     // failing the test
     debugger
     return false
 })

 const login = new LoginPageObject();

 before(() => {

     cy.fixture('login').then(function (data) {
         this.data = data;
     })

 })

 it('Login with credentials', function(){

     // const result = new Result();

 // try{
     cy.visit('https://moodle.ubt-uni.net/login/index.php')
     login.moodleLoginPage().should('be.visible')
    // cy.wait(500)
     window.open("https://moodle.ubt-uni.net/auth/oauth2/login.php?id=1&wantsurl=https%3A%2F%2Fmoodle.ubt-uni.net%2F&sesskey=nX4ECQWsVg", "href");
     login.googleSignInButton().invoke('removeAttr', 'href')
         .then(href => {
             cy.visit(href);
         });
 //     homePage.getDomainName()
 //         .type(this.data.domainName)
 //         .should('have.value', this.data.domainName)
 //
 //     homePage.getContinueButton().click()
 //
 //       // cy.contains('Login')
 //     homePage.getLoginTitle()
 //         .should('contain', 'KODE Channel')
 //
 //          homePage.getUsername()
 //         .type(this.data.username)
 //         .should('have.value', this.data.username)
 //
 //         homePage.getPassword()
 //         .type(this.data.password)
 //         .should('have.value', this.data.password)
 //
 //      homePage.getLoginButton().click()
 //     homePage.getHomePage().should('be.visible')

 // }catch(e){
 //
 //
 //     homePage.getLoginTitle()
 //         .should('contain', 'KODE Channel')
 //
 //     homePage.getUsername()
 //         .type(this.data.username)
 //         .should('have.value', this.data.username)
 //
 //     homePage.getPassword()
 //         .type(this.data.password)
 //         .should('have.value', this.data.password)
 //
 //     homePage.getLoginButton().click()
 // }


 })

 // after(() => {
 //     cy.log('Tests Execution is Finished!')
 // })
 //
 // describe('Test Suite', () => {
 //
 //     it(['SmokeTests', 'Tags'], 'Check if user is logged in ', () => {
 //
 //         homePage.getHomePage().should('be.visible')
 //     })

 // })


