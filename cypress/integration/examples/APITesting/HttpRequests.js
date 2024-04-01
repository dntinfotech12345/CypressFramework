describe("httpRequest",()=>{


    it("Get Call",()=>{

        cy.request('Get','https://jsonplaceholder.typicode.com/posts/1')
        .its('status')
        .should('equal',200);
    })

    it("post Call",()=>{

       cy.request({

                method:"POST",
                url:"https://jsonplaceholder.typicode.com/posts/",
                body:{
                        title:"Test post",
                        body:"This is the post call",
                        userId:1

                }
       })
        .its('status')
        .should('equal',201);
    })


    it("put Call",()=>{

        cy.request({
 
                 method:"PUT",
                 url:"https://jsonplaceholder.typicode.com/posts/1",
                 body:{
                         title:"Test post -UPDATED",
                         body:"This is the put call",
                         userId:1,
                         id:1
 
                 }
        })
         .its('status')
         .should('equal',200);
     })
 

     
     it("delete Call",()=>{

        cy.request({
 
                 method:"DELETE",
                 url:"https://jsonplaceholder.typicode.com/posts/1",
                             })
                 
                    .its('status')
                    .should('equal',200);
                })
})