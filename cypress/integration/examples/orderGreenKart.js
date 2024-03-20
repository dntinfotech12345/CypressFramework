///<reference types='Cypress'/>

import HomePageGreenKart from "../pageObjects/HomePageGreenKart";
describe('testsuite',function()
{
    before(function()
    {
        //run once before all tests in the block
        cy.fixture('vegName').then(function(data)
        {
            this.data=data

        })
    })

it('verify Product Price in cart',function()
{
    const homePageGreenKart=new HomePageGreenKart()
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.clickOnIncrement(this.data.name[0],3)
    cy.addVegToCart(this.data.name[0])
    cy.clickOnIncrement(this.data.name[1],2)
    cy.addVegToCart(this.data.name[1])
    cy.clickOnIncrement(this.data.name[2],1)
    cy.addVegToCart(this.data.name[2])

    let expectTotal=0
    let actualTotal=0
    cy.get('.cart-icon > img').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.get('tr td:nth-child(5) p').each(($e1,index,$list)=>{
        expectTotal=expectTotal+Number($e1.text())
    })
    cy.get('.totAmt').then(function(price){
        actualTotal=actualTotal+Number(price.text())
    }).then(function(){
        expect(actualTotal).to.equal(expectTotal)
    })

    
   
})
    
})