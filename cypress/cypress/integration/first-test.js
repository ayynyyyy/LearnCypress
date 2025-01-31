/// <reference types= "cypress" />

describe('My First String', () => {
    it ('clicking "type" shows the rignt headings', () => {
        cy.visit('https://example.cypress.io')

        cy.pause()

        
        cy.contains('type').click()
        
        //should be an a URL which includes 'comands/actions'
        
        cy.url().should ('include', 'comands/actions')

        //get an input, type into it and veryfy that the valus has been updated
        
        cy.get('action email')
        .type('test@example.com')
        .should('have.value', 'test@example.com')
    })
})