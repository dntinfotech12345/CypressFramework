///<reference types='Cypress'/>
describe('Handling popups',function(){
    it('Alert popup',function(){
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    })

    it('new window',function(){
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.url().should('include','www.rahulshettyacademy')
        cy.go('back')
        
    })

})