/// <reference types="cypress" />

describe('paybill with command', ()=> {
    it('should try to login', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        // cy.url().should('include', 'login.html')
        cy.login('username', 'password')
    })

    it('should try to paybill', () => {
        cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html')
        // cy.url().should('include', 'pay-bills.html')
        cy.form()
    })
})