///<reference types='Cypress'/>
describe('TT',function(){
    it('T1',function(){
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/', {
            onBeforeLoad(win) {
              cy.stub(win, 'open')
            }
          })
       
        // cy.get('#opentab').invoke('removeAttr','target').click()
        // cy.go('back')

        cy.get('#openwindow').click();
    //   cy.window().its('open').should('be.called');   

        // cy.get('#openwindow').then(function(el)
        // {
        //     const url=el.prop('href')
        //     cy.visit(url)
           
        // })
    })
})