class HomePageGreenKart
{
    productNames()
    {
        return cy.get('.product-name')
    }

    decrementBtn()
    {
        return cy.get('.decrement')
    }

    incrementBtn()
    {
        return cy.get('.increment')
    }

    quantityTxtBx()
    {
        return cy.get('.quantity')
    }

    addToCartBtn()
    {
        return cy.get('.product-action button')
    }
}
export default HomePageGreenKart;