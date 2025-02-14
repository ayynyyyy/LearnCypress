describe('Validate Header', ()=>{
    it('Succesfully Validate Header1', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('Pokemon')
        cy.get('@Pokemon').its('headers').its('content-type').should('include', 'application/json; charset=utf-8')
    });
    it('Succesfully Validate Header2', () => {
        cy.request({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/ditto'
        }).then((Response =>{
            expect(Response.headers['content-type']).to.include('application/json; charset=utf-8'),
            expect(Response.headers).to.have.property('cache-control')
        }))
        //tugas Validate Header
        .then((Response =>{
            expect(Response.body).to.have.property('abilities')
        }))
    });
})
describe('Validate Status', () =>{
    it('Successfully Validate Status1', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('ditto')
        cy.get('@ditto').its('status').should('equal', 200)
    });
    it('Sucessfully Validate Status2', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?pages=2&per_pages=1&delay=3'
        }).as('users')
        cy.get('@users').its('status').should('equal', 200)
    });
})
describe('Validate Body',()=>{
    it('Succesfully Validate Body', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('dito')
        cy.get('@dito').its('body').should('include', {name:"ditto"})
    });
// tugas Validate Body
    it('Succesfully Validate Body2', () => {
        cy.request({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/ditto'
        }).then((Response => {
            expect(Response.body.abilities).to.be.an('array'),
            expect(Response.body.abilities[0].ability.name).to.eq("limber")
        }))
    });
})
describe('Negative Response', () =>{
    it('Negative Response', () => {
        cy.request({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/eduwork',
            failOnStatusCode:false
        }).as('eduwork')
        cy.get('@eduwork').its('status').should('equal', 404)  
    });
})