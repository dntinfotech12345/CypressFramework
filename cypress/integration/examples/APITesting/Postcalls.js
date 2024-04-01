
describe("Post call first apporach", () => {

    it("post request 1st approach", () => {

        const requestBody =
        {
            "name": "morpheus",
            "job": "leader"
        }


        cy.request({

            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: requestBody
        })
            .then((response) => {
                expect(response.status).to.eq(201);

                expect(response.body.name).to.eq("morpheus")
                expect(response.body.job).to.eq("leader")


            })
    })

    
    it("post request 2nd approach dyamically gerating json object", () => {

        const requestBody =
        {
            "name": Math.random().toString(6).substring(2),
            "job": "leader"
        }


        cy.request({

            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: requestBody
        })
            .then((response) => {
                expect(response.status).to.eq(201);

                expect(response.body.name).to.eq(requestBody.name)
                expect(response.body.job).to.eq("leader")


            })
    })

    
    it("post request 3rd approach:fixture from cypress", () => {

       
    cy.fixture('users').then((data)=>{
        const requestBody=data;
        cy.request({

            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: requestBody
        })
            .then((response) => {
                expect(response.status).to.eq(201);

                expect(response.body.name).to.eq(requestBody.name)
                expect(response.body.job).to.eq(requestBody.job)

                expect(response.body).has.property('name',requestBody.name)
                expect(response.body).to.have.property('name',requestBody.name)
            })
    })


    })


       
})