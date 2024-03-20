class HomePage
{

    getNameTxtBx()
    {
        return cy.get("div[class='form-group'] input[name='name']")
    }

    getTwoWayDataBinding()
    {
        return cy.get('h4 input')
    }

    getEmailTxtBx()
    {
        return  cy.get("div[class='form-group'] input[name='email']")
    }

    getPassWordTxtBx()
    {
        return cy.get("#exampleInputPassword1")
    }

    getCheckMeOutIfyouLoveIceCreamsChckBx()
    {
        return cy.get("#exampleCheck1")
    }

    getGender()
    {
        return  cy.get("#exampleFormControlSelect1")   
    }

    getEmployeeRdioBtn()
    {
        return  cy.get("#inlineRadio2")
    }

    getEntrepreneurRdioBTn()
    {
        return cy.get('#inlineRadio3')   
    }

    getShopTab()
    {
        return cy.get(".navbar-nav li[class='nav-item']:nth-child(2)")
    }

}
export default HomePage;