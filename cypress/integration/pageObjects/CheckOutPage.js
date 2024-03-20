class CheckOutPage
{
    checkOutBtn()
    {
        return cy.get("button[class='btn btn-success']")
    }

    tabletotalList()
    {
        return cy.get("table tbody tr td:nth-child(4) strong")
    }

    totalAmount()
    {
        return cy.get("table tbody tr td:nth-child(5) strong")
    }

    countryDropDnTxtBx()
    {
        return cy.get('#country')
    }
    countryDropDnTxtBxSugg()
    {
        return cy.get('.suggestions a')
    }

    agreeTermsAndCondChckBx()
    {
        return cy.get('#checkbox2')
    }

    purchaseBtn()
    {
        return cy.get("input[value='Purchase']")
    }

    confirmationMsg()
    {
        // return cy.get("div[class='alert alert-success alert-dismissible'] strong")
        return cy.get('.alert')
    }
}
export default CheckOutPage;