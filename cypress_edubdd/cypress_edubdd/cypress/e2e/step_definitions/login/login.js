import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginpage from "../pagepatern/login.page";


Given('I open login page', () => {
  loginpage.visit();
  cy.url().should('include', 'login.html')
})

When('I submit Invalid login', () => {
  cy.get('#user_login').type("ayynyyy")
  cy.get('#user_password').type("pass1234")
  cy.contains('Sign in').click()
})

When('I submit login', () => {
  loginpage.fillUsername('username')
  loginpage.fillPassword('password')
  loginpage.SignIn();
  // cy.get('#user_login').type("username")
  // cy.get('#user_password').type("password")
  // cy.contains('Sign in').click()
})

Then('I should see homepage', () => {
  cy.get('#account_summary_tab > a').should('be.visible')
})

Then('I see alert error', () => {
  cy.get('.alert-error').should('contain.text', 'Login and/or password are wrong.')
})

