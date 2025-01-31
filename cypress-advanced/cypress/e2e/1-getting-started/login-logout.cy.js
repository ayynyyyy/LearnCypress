///<reference types="cypress"/>

describe('Login/logout test', function() {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()

    })
    it('Should  Invalid Login',() => {
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type('invalid username')
        cy.get('#user_password').type('invalid pasword')
        cy.get ('input[name="submit"]').click()
        cy.get('.alert-error').should('contain.text', 'Login and/or password are wrong.')
    });
    it('Should  valid Login',() => {
        cy.fixture('user').then (user =>{
            const username = user.username
            const password = user.password
        
        cy.get('#user_login').type('username')
        cy.get('#user_password').type('password')
        cy.get ('input[name="submit"]').click()
        cy.url().should('include', '/bank/account-summary.html');
        cy.get('h2').should('contain.text', 'Cash Accounts');
    })
    });

    it('Should Logout',() => {
        cy.get('.icon-user').click();
        cy.contains('Logout').click();
        cy.url().should('include', 'index.html');
          

    })
})
