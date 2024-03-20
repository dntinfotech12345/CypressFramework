///<reference types='Cypress'/>
const neatCsv = require('neat-csv')
describe('JWT Session',()=>{
    it('is logged in through local storage',async ()=>{
        cy.LogiApi().then(function(){
            cy.visit('https://www.rahulshettyacademy.com/client/',
            {
                onBeforeLoad:function(window){
                    window.localStorage.setItem('token',Cypress.env('token'))
                }
            }
            )
        })

        cy.get('.card-body button:last-of-type').eq(1).click()
        cy.get("button[class='btn btn-custom']").eq(2).click()
        cy.get('.subtotal button').click()
        cy.get(".form-group input[class='input txt text-validated']").type('ind')
        cy.get('.ta-results button').each(($e1,index,$list)=>{
            if($e1.text().trim()==='India')
            {
                cy.wrap($e1).click()
            }
        })
        cy.contains('Place Order').click()
        cy.wait(2000)
        cy.contains('Click To Download Order Details in CSV').click()

        cy.readFile(Cypress.config("fileServerFolder")+"cypress\downloads\order-invoice_mistydahi.csv")
        .then(async (text)=>
        {
            const csv= await neatCsv(text)
        })

        //trial
        
    })
})