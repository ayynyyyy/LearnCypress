/// <reference types="cypress" />

describe('Login Tests for SauceDemo', () => {
    beforeEach(() => {
      // Kunjungi halaman login SauceDemo
      cy.visit('https://www.saucedemo.com/');
      cy.url().should('include', 'saucedemo.com');
    });
  
    it('Should valid login credentials', () => {

      cy.fixture('user').then((user) => {
        const validUser = user.validUser;
        cy.login(validUser.username, validUser.password);
  
        // Verifikasi URL dashboard setelah login berhasil
        cy.url().should('include', '/inventory.html');
        cy.get('.title').should('contain.text', 'Products');
      });
    });
  
    it('Should Invalid login ', () => {
      cy.fixture('user').then((user) => {
        const invalidUser = user.invalidUser;
        cy.login(invalidUser.username, invalidUser.password);
  
        // Verifikasi pesan error
        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service');
      });
    });
})