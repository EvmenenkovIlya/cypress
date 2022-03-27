describe( "Log in", function() {
    it("Sign in",  function() {
        cy.visit("http://demo.guru99.com/Agile_Project/Agi_V1/")
        cy.get('input[type = "text"]').type('1303')
        cy.get('input[type = "password"]').type('Guru99')
        cy.contains("LOGIN").click()
        cy.contains("Welcome To Customer's Page of Guru99 Bank").should("be.visible");
    })
})