///<reference types='Cypress'/>
import HomePage from "../../../pageObjects/HomePage"
import ProductPage from "../../../pageObjects/ProductPage"
import CheckOutPage from "../../../pageObjects/CheckOutPage"

import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";

const homePage=new HomePage()
const productPage=new ProductPage()
const checkOutPage=new CheckOutPage()


Given('I open Ecommerce page',function(){
    cy.visit(Cypress.env('url')+"/angularpractice/")
})

When('I add items to Cart',function(){
    homePage.getShopTab().click()
    this.data.productName.forEach(element => cy.selectProduct(element));

})

When('validate the total prices',function(){
    var expectedItemTotal=0
    var actualItemTotal=0
    productPage.getCheckOutBtn().click()
    //validate the price
    checkOutPage.tabletotalList().each(($e1,index,$list)=>
    {
        var itemStrPr=$e1.text().split(" ")[1].trim()
        expectedItemTotal=Number(expectedItemTotal) +Number(itemStrPr)
    }).then(function()
    {
        cy.log(expectedItemTotal)
    })

    checkOutPage.totalAmount().then(function(element)
    {
        actualItemTotal=Number(element.text().split(" ")[1].trim())
    }).then(function(){
        expect(expectedItemTotal).to.equal(actualItemTotal)
    })
    checkOutPage.checkOutBtn().click()
})

Then('Select the country submit and verify Thankyou',function(){
    checkOutPage.countryDropDnTxtBx().type('India')
    cy.config('defaultCommandTimeout',8000)
    checkOutPage.countryDropDnTxtBxSugg().click()
    checkOutPage.agreeTermsAndCondChckBx().check({force:true})
    checkOutPage.purchaseBtn().click()
    checkOutPage.confirmationMsg().then(function(txt){
        expect(txt.text().includes("Success")).to.true
    })
})