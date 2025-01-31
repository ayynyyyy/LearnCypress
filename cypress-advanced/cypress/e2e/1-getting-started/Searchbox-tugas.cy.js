///<reference types="cypress"/>

describe('Searchbox test', function() {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')

    })
    it('Should Searchbox ',() => {
        cy.get('#searchTerm').type('Online {enter}')
        
    });
    it('Should show search result page',() => {
        cy.get('h2').should('contain.text','Search Results:')
    });

});