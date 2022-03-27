Cypress.Commands.add("fillLoginAndPassword", (login, password ) => {
    cy.get('input[type = "text"]').type(login)
    cy.get('input[type = "password"]').type(password)
});