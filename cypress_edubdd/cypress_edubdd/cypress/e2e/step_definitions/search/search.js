import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

  Given('I am on the page', () => {
    cy.visit('http://zero.webappsecurity.com/')
  })
  When('I enter {string} in the search bar', () => {
    cy.get('#searchTerm').type('online banking{enter}') //Online Banking
  });
  
  When('I enter {string} invalid keyword', () => {
    cy.get('#searchTerm').type('xy21{enter}'); // Ketik kata kunci di search bar
  });
  
  When('I leave the search bar empty', () => {
    cy.get('#searchTerm').clear().type('{enter}') // search bar kosong
  });

  Then('I should see results related', () => {
    cy.get('li > a').should('contain.text', 'Zero - Free Access to Online Banking') // assertionn
  });
  
  Then('I should see a message', () => {
    cy.get('h2').should('contain.text', 'Search Results:') //assertion
  });

  Then('I should see an error', () => {
    cy.get(':nth-child(4) > :nth-child(1) > a').should('contain.text', 'Zero - Personal Banking - Loans - Credit Cards')//assertion
  });
  