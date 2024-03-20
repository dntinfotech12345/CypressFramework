describe('ecom',function(){
    it('place an order',function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').each(($el,index,$list) => {
            const prodNames=$el.find('h4.product-name').text()
            if(prodNames.includes('Cashews')||prodNames.includes('Capsicum'))
            {
                cy.wrap($el).find('button').click()
            }
        })
        
        cy.get('.cart-icon').click()

        cy.get('.action-block').contains('PROCEED TO CHECKOUT').click()

        cy.get('@productLocator').find('button').contains('Place Order').click()


    })
})