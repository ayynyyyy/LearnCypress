///<reference types="cypress"/>

describe('Searchbox test', function() {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')

    })
    it('Should Type Into Searchbox and Submit',() => {
        cy.get('#searchTerm').type('apa ya {enter}')
    });

    it('Should show search result page',() => {
        cy.get('h2').should('contain.text','Search Results:')
    });

});