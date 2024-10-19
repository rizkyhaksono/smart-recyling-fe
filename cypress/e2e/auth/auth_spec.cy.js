context("Authentication Modules", () => {
  describe("Test End-to-End Sign In Page", () => {
    beforeEach(() => {
      cy.visit("https://www.smart-recycling.my.id/signin")
    });

    it("should display the sign in page", () => {
      cy.get('[data-cy="email"]').type("testadmin@gmail.com")
      cy.get('[data-cy="password"]').type("testadmin123")
      cy.get('[data-cy="submit"]').click()
    });

    it("should display an error message when email is null", () => {
      cy.visit("https://www.smart-recycling.my.id/signin");

      cy.get('[data-cy="password"]').type("testadmin123");

      cy.get('[data-cy="submit"]').click();
      cy.contains("Email is required");
    });
  });

  describe("Test End-to-End Sign Out Function", () => {
    beforeEach(() => {
      cy.visit("https://www.smart-recycling.my.id/")
    });

    it("should display the sign in page", () => {
      cy.visit("https://www.smart-recycling.my.id/signin")
    });
  })
})