///<reference types='Cypress'/>
describe('working on cart module',function(){
    it('tc1',function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('wa')
        cy.wait(2000)
        cy.get('.products .product').each(($e1,index,$list)=>{
           const productNAme=$e1.find('.product-name').text()
           cy.log(productNAme)
           cy.wrap($e1).find('button').click()
        })
        cy.get('.cart-icon').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.url().should('include','cart')
        cy.contains('Place Order').click()
        cy.url().should('include','country')
        cy.get('.wrapperTwo').find('select').select('India').should('have.value','India')
        cy.get('.chkAgree').click()
        cy.contains('Proceed').click()
        cy.wait(4000)
        cy.url().should('equal','https://rahulshettyacademy.com/seleniumPractise/#/')
       

    })
})