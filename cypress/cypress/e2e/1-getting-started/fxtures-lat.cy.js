/// <reference types="cypress" />

describe('login with fixtures data', ()=> {
    it('should try to login', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')

        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password
            cy.login(username,password)
            cy.get('.alert-error').should('contain.text', 'Login and/or password are wrong.')

            //cy.get('#user_login').type(username)
            //cy.get('#user_password').type(password)
            //cy.get('#user_remember_me').check()
            //cy.get('input[type="submit"]').click()
        })
        //cy.url().should('include', 'login.html')
    })
})