/// <reference types="cypress" />

describe('login with command', ()=> {
    it('should try to login', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.login('username', 'password')
        //cy.url().should('include', 'login.html')

        //cy.fixture("user").then(user => {
            //const username = user.username
            //const password = user.password
            
            //cy.get('.alert-error').should('contain.text', 'Login and/or password are wrong')
        //})
        //cy.url().should('include', 'login.html')
    })
})