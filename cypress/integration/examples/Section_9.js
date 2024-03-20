///<reference types='Cypress'/>

import HomePage from "../pageObjects/HomePage"
import ProductPage from "../pageObjects/ProductPage"
import CheckOutPage from "../pageObjects/CheckOutPage"
describe('tcs',function()
{

    //this are called test hooks
    before(function()
    {
        //run once before all tests in the block
        cy.fixture('example').then(function(data)
        {
            this.data=data

        })
    })
    it('tc1',function()
    {
        const homePage=new HomePage()
        const productPage=new ProductPage()
        const checkOutPage=new CheckOutPage()

        //use of environment variables 
        cy.visit(Cypress.env('url')+"/angularpractice/")
        homePage.getNameTxtBx().type(this.data.name)
        homePage.getNameTxtBx().should('have.attr','minlength','2')
      
        homePage.getTwoWayDataBinding().should('have.value',this.data.name)
    
        homePage.getEmailTxtBx().type(this.data.email)
        homePage.getPassWordTxtBx().type(this.data.pass)
        homePage.getCheckMeOutIfyouLoveIceCreamsChckBx().click()
        homePage.getGender().select(this.data.gender)
        homePage.getEmployeeRdioBtn().click()
        homePage.getEntrepreneurRdioBTn().should('be.disabled')
        homePage.getShopTab().click()
        this.data.productName.forEach(element => cy.selectProduct(element));
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
        checkOutPage.countryDropDnTxtBx().type(this.data.country)
        cy.config('defaultCommandTimeout',8000)
        checkOutPage.countryDropDnTxtBxSugg().click()
        checkOutPage.agreeTermsAndCondChckBx().check({force:true})
        checkOutPage.purchaseBtn().click()
        // checkOutPage.confirmationMsg().should('include.value',"Success! Thank you! Your order will be delivered in next few weeks :-).") erroe
        // checkOutPage.confirmationMsg().then(function(txt){
        //     expect(txt.text()).to.equals("Success!")
        // })
        checkOutPage.confirmationMsg().then(function(txt){
            expect(txt.text().includes("Success")).to.true
        })
        
        
    })
})