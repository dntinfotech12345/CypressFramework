describe('test suite',function(){
it('checkbox test',function(){

    cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
    // cy.get('#checkbox-example fieldset label[for="bmw"] input').click()
    // cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
    cy.get('input[type="checkbox"]').check(['option1','option3']).should('be.checked')
})

it('dropdown test',function(){
    cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
    cy.get('#dropdown-class-example').select('option1').should('have.value','option1')


})

it('dynamic dropdown handling',function(){
    cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
    cy.get('#autocomplete').type('ind')
    cy.get('.ui-menu-item-wrapper').each(($el,index,$list) =>{
        if($el.text()=="India")
        {
            cy.wrap($el).click()
        }
    })
    cy.get('#autocomplete').should('have.value','India')

})

it('visibility and invisibility of elements',function(){
    cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
    cy.get('#displayed-text').as('fluctuatingElement')
    cy.get('@fluctuatingElement').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('@fluctuatingElement').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('@fluctuatingElement').should('be.visible')
})

it('handling radio button',function(){
    cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
    cy.get('input[value="radio1"]').click()
    })

})
