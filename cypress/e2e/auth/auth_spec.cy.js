context("Authentication Modules", () => {
  describe("Test End-to-End Sign In Page", () => {
    beforeEach(() => {
      cy.visit("https://smartrecycling.natee.me/signin")
    });

    it("should display the sign in page", () => {
      cy.get('#email').type("testadmin@gmail.com")
      cy.get('#password').type("testadmin123")
      cy.get('button[type="submit"]').click()
    });

    it("should display an error message when email is null", () => {
      cy.get('#password').type("testadmin123");
      cy.get('button[type="submit"]').click();
      cy.get('#email').should('have.value', '');
      cy.get('#email').should('be.empty');
    });
  });

  describe("Test End-to-End Sign Out Function", () => {
    it("when login redicect to home", () => {
      // cy.get('#email').type("testadmin@gmail.com")
      // cy.get('#password').type("testadmin123")
      // cy.get('button[type="submit"]').click()
    });
  })
})