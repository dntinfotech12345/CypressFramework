describe("query parameters", () => {

    it('query parameters handling', () => {

        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/usersA',
            qs:{page:2}

        }).then((response)=>{
            console.log("Response===>>>>"+response.body)
            expect(response.status).to.eq(201)
            expect(response.body.page).to.eq(2)
            expect(response.body.data).has.length(6)
        })
    })

})