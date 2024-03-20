// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('selectProduct', (productName) => { 

    cy.get('.card-title a').each(($e1,index,$list)=>{
        if( $e1.text().includes(productName))
        {
             cy.get(".btn.btn-info").eq(index).click()
        }
     })

})

Cypress.Commands.add('clickOnIncrement', (productName,quantity) => { 

     cy.get('.products > > .product-name').each(($e1,index,$list)=>{
         if( $e1.text().includes(productName))
         {
               for(let i=0;i<quantity;i++)
               {
               cy.get('.increment').eq(index).click()
               }
         }
      })
 
 })



Cypress.Commands.add('addVegToCart', (itemName) => { 


     cy.get('.products > > .product-name').each(($e1,index,$list)=>{
         if( $e1.text().includes(itemName))
         {
               
              cy.get('.product-action button').eq(index).click()
         }
      })
 
 })

 Cypress.Commands.add('LogiApi',()=>{
     cy.request("POST","https://www.rahulshettyacademy.com/api/ecom/auth/login",
     {"userEmail": "mistydahi@gmail.com", "userPassword": "Mistydahi1@"}
     ).then(function(response)
     {
          expect(response.status).to.equal(200)
          Cypress.env('token',response.body.token);
     })
 })
