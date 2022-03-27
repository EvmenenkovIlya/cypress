

describe( "AddNewTariffPlan", ()=> {
    beforeEach(()=>{
    cy.visit("https://demo.guru99.com/telecom/addtariffplans.php")
    });

    it("ResetBotton",  function() {       
        cy.FillWithData(12345,123)
        cy.get('input[type = "reset"]').click()  
        cy.CheckTExtboxesAreEmpty   
    });

    it("ValidData",  function() {       
        cy.FillWithData(12345,123)
        cy.get('input[type = "submit"]').click()  
        cy.contains("Congratulation you add Tariff Plan").should("be.visible");
        cy.visit("https://demo.guru99.com/telecom/assigntariffplantocustomer.php")
        cy.get('input[name = "customer_id"]').type('881576')
        cy.get('input[type = "submit"]').click()
        //Проверить наличие тарифа
    });

    it("SpecialChars",  function() {       
        cy.get('input[name = "rental"]').type('*()^')
        cy.contains("Special characters are not allowed").should("be.visible");
        cy.get('input[name = "local_minutes"]').type('!@#$')
        cy.get('input[name = "inter_minutes"]').type('%^&*')
        cy.get('input[name = "sms_pack"]').type('()_+)')
        cy.get('input[name = "minutes_charges"]').type('&^%')
        cy.get('input[name = "inter_charges"]').type('#$$')
        cy.get('input[name = "sms_charges"]').type('%^&')
        cy.get('input[type = "submit"]').click()  

        /*cy.contains("Congratulation you add Tariff Plan").should("be.visible");
        cy.visit("https://demo.guru99.com/telecom/assigntariffplantocustomer.php")
        cy.get('input[name = "customer_id"]').type('881576')
        cy.get('input[type = "submit"]').click()
        cy.contains("Congratulation you add Tariff Plan").should("be.visible");*/
        //Проверить наличие тарифа
        //Special characters are not allowed
    });
})
Cypress.Commands.add("FillWithData", (charsLength5, charsLength3) => {
    cy.get('input[name = "rental"]').type(charsLength5)
    cy.get('input[name = "local_minutes"]').type(charsLength5)
    cy.get('input[name = "inter_minutes"]').type(charsLength5)
    cy.get('input[name = "sms_pack"]').type(charsLength5)
    cy.get('input[name = "minutes_charges"]').type(charsLength3)
    cy.get('input[name = "inter_charges"]').type(charsLength3)
    cy.get('input[name = "sms_charges"]').type(charsLength3)
});
Cypress.Commands.add("CheckTExtboxesAreEmpty", () => {
    cy.get('input[name = "rental"]').should("have.text", '');
        cy.get('input[name = "local_minutes"]').should("have.text", '');
        cy.get('input[name = "inter_minutes"]').should("have.text", '');
        cy.get('input[name = "sms_pack"]').should("have.text", '');
        cy.get('input[name = "minutes_charges"]').should("have.text", '');
        cy.get('input[name = "inter_charges"]').should("have.text", '');
        cy.get('input[name = "sms_charges"]').should("have.text", ''); 
});