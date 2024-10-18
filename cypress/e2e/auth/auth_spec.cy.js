context("Authentication Modules", () => {
  describe("Test End-to-End Sign In Page", () => {
    beforeEach(() => {
      cy.visit("http://localhost:5173/signin")
    });

    it("should display the sign in page", () => {
      cy.get('[data-cy="email"]').type("testadmin@gmail.com")
      cy.get('[data-cy="password"]').type("testadmin123")
      cy.get('[data-cy="submit"]').click()
    });

    it("should display an error message when email is null", () => {
      cy.visit("http://localhost:5173/signin");

      cy.get('[data-cy="password"]').type("testadmin123");

      cy.get('[data-cy="submit"]').click();
      cy.contains("Email is required");
      // cy.get('[data-cy="email"]').should("have.class", "border-red-500");
      // cy.get('span').contains('Email is required').should('be.visible');
      // cy.get('[data-cy="email"]').invoke('attr', 'class').then(classList => {
      //   expect(classList).to.contain('border-red-500');
      // });
    });
  });

  describe("Test End-to-End Sign Out Function", () => {
    beforeEach(() => {
      cy.visit("http://localhost:5173")
    });

    it("should display the sign in page", () => {
      cy.visit("http://localhost:5173/signin")
    });
  })
})