describe('Create user', ()=>{
    it('Succesfully Create Nwe User', () => {
        var user ={
            "name": "Ayynyyyy",
            "job": "QA Manual"
        }
        cy.request('POST','https://reqres.in/api/users', user).then((response)=>{ 
            expect(response.status).equal(201),
            expect(response.body.name).eq(user.name),
            expect(response.body.job).eq(user.job)
        })
    });
})