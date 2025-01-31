/// <reference types="cypress" />

describe('My second Test', () => {
    it('should lead books website', () => {
        cy.visit('https://books.toscrape.com/index.html', { timeout: 10000 })
        cy.url().should('include', 'index.html')
        cy.get('a').contains('Travel').click() 
        cy.get('h1').should('contain', 'Travel') 
    })
    //it('should click on travel category', () => {
       // cy.get('a').contains('Travel').click() 
        //cy.get('h1').should('contain', 'Travel') })
})
