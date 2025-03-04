describe('Basic Authentication', () =>{
    it('Sucessfully login by appending username and password in URL', () => {
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
    });
    it('Succesfully login using headers', () => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth',{
            headers:{
                authorization: 'Basic YWRtaW46YWRtaW4='
            },
            failOnStatusCode: false
        })
        cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
    });
})
//TUGAS AUTHENTICATION

describe('Authentication with token', ()=>{
    it('Successfully login with token', () =>{
        cy.LoginViaAPI()
        cy.request({
            method: 'POST',
            url: `${Cypress.env('apiUrl')}/protected/resource`,
            headers: {
                Authorization: `Bearer ${Cypress.env('authToken')}`
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('data');
        });
    })
})