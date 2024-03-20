///<reference types='Cypress'/>
///<reference types='Cypress-iframe'/>
import "cypress-iframe"
describe('working on frame',function(){
    it('iframe test',function(){
    cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')     
    cy.frameLoaded('#courses-iframe')

    cy.iframe().find("a[href*='mentorship']").eq(0).click()
    cy.wait(3000)
    cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)
    })
})