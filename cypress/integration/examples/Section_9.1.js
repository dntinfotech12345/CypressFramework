///<reference types='Cypress'/>
import "cypress-iframe"
describe('working on frame',function(){
    it('iframe test',function(){
    cy.visit('https://www.rahulshettyacademy.com/angularpractice/')  
    cy.get(".navbar-nav li[class='nav-item']:nth-child(2)").click()

    })
})