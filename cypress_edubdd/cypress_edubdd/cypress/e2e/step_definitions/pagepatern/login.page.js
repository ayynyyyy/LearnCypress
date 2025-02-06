const URL = 'http://zero.webappsecurity.com/login.html'
const USERNAME = '#user_login'
const PASSWORD = '#user_password'
const SIGNIN = 'Sign in'

class loginpage {
    static visit() {
        cy.visit(URL)
    }
    static fillUsername (username){
        cy.get(USERNAME).type(username)
    }
    static fillPassword (password){
        cy.get(PASSWORD).type(password)
    }
    static SignIn(){
        cy.contains(SIGNIN).click()
    }
}

export default loginpage;