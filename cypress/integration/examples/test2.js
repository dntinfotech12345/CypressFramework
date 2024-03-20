///<reference types='Cypress'/>

describe("test ui",function() {

    it("add product to cart",function() {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.products').find('.product').should('have.length',4)
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()

    } )

} )
