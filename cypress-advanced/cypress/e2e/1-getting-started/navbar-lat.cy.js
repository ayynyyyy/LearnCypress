///<reference types="cypress"/>

describe('Navbar test', function() {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
    })
    it('Should  Display online banking content',() => {
        cy.get('#onlineBankingMenu').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('strong').should('contain.text', 'Online Banking')
       
    });
    it('Should display feedback content',() => {
        cy.contains('Feedback').click()
        cy.url().should('include', 'feedback.html')
        cy.get('#faq-link').should('contain.text', 'Frequently Asked Questions')
    });

    it('Should display homepage content',() => {
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
        cy.get('strong').should('contain.text', 'Home')
    })
})
