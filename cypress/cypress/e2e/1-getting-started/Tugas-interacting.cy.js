/// <reference types="cypress" />

describe('My second Test', () => {
    it('should lead books website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
        cy.get('#user_login').clear()
        cy.get('#user_login').type('Aini-Rahma')
        cy.get('#user_password').clear()
        cy.get('#user_password').type('Aini.12345')
        cy.get('#user_remember_me').click()
    })
})