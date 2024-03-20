///<reference types='Cypress'/>
describe('mock data',function(){
    it('intercept data',function(){
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        

        cy.intercept({
            method:'GET',
            url:"https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty"
        },
        {
            statusCode:200,
            body:[{
                "book_name":"null",
                "isbn":"SPY40",
                "aisle":"2529857"}]
        }).as('bookDetails')

        cy.get('button[class="btn btn-primary"]').click()

        cy.wait("@bookDetails").then(({request,response})=>{
            cy.get('tr').should('have.length',response.body.length+1)
        })
        // cy.get('p').then(function($txt){
        //     expect($txt.text()).to.equal('Oops only 1 Book available')
        // })
        cy.get('p').should('have.text','Oops only 1 Book available')
    })
})