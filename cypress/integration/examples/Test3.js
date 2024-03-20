describe('iterate through each elements',function() {
    it('print the names of the product',function() {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length',4)
        cy.get('@productLocator').find('.product').each(($el,index,$list) => {
            const data=$el.find('h4.product-name').text();
            if(data.includes('Cashews'))
            {
                cy.wrap($el).find('button').click()
            }

            cy.get('.brand').then(function(logoElement){
                cy.log(logoElement.text())

            })
        } )

    } )

} )