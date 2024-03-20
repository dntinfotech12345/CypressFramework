///<reference types='Cypress'/>
describe('cyp',function(){
    it('tc',function(){
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.get("[value='radio2']").check()
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item-wrapper').each(($e1,index,$list)=>{
           const data=$e1.text()
           if(data=='India')
           {
            cy.wrap($e1).click()
           }

        })
    })
})