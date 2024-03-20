///<reference types='Cypress'/>
describe('prac',function(){
    it('final trial',function(){
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')

        //handle radio
        cy.get('[value="radio1"]').click()

        //handle dynamic dropdown
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item-wrapper').each(($el,index,$list)=>{
            const place=$el.text()
            if(place=='India')
            {
                cy.wrap($el).click()
            }
        })
        cy.get('#autocomplete').should('have.value','India')
        //some change done
        

        //static dropdown
        cy.get('#dropdown-class-example').select('option1').should('have.value','option1')

        //handle checkbox
        cy.get('[type="checkbox"]').check('option2')

        //handle hidden element
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //handle dynamic table
        cy.get("table[name='courses'] tbody tr td:nth-child(2)").each(($el,index,$list)=>{
            const data=$el.text()
            if(data=="Write effective QA Resume that will turn to interview call")
            {
                cy.get("table[name='courses'] tbody tr td:nth-child(2)").eq(index).next().then(function(price){
                    const itemP=price.text()
                    expect(itemP).to.equals('0')
                })
            }
        })

        //handle new window
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.url().should('include','https://www.rahulshettyacademy.com/')
        cy.go('back')
        
        
        //handle popups
        const name1='abhi'
        cy.get('#name').type(name1)
        cy.get('#alertbtn').click()
        cy.get('#name').type(name1)
        cy.get('#confirmbtn').click()
        cy.on('window:alert',(str)=>{
            expect(str).to.equals('Hello '+name1+', share this practice page and share your knowledge')
        })
        cy.on('window:confirm',(str)=>{
            expect(str).to.equals('Hello '+name1+', Are you sure you want to confirm?')
        })

        //handle mouse hover
        cy.get('#mousehover').invoke('show')
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')
    })
})