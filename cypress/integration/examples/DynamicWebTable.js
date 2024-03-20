///<reference types='Cypress'/>
describe('web tables',function(){
it('prac table',function(){
    cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
    cy.get('[name="courses"] tr td:nth-child(2)').each(($el,index,$list) =>{
        const data=$el.text()
        if(data.includes('Python'))
        {
            cy.get('[name="courses"] tr td:nth-child(2)').eq(index).next().then(function(price){
               const priceText=price.text()
               expect(priceText).to.equal('25')
            })
        }
        
    })

})

})