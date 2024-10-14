context("Authentication Modules", () => {
  describe("Test End-to-End Sign In Page", () => {
    beforeEach(() => {
      cy.visit("http://localhost:5173/signin")
    })

    it("should display the sign in page", () => {
      cy.get('[data-cy="email"]').type("testadmin@gmail.com")
      cy.get('[data-cy="password"]').type("testadmin123")
      cy.get('[data-cy="submit"]').click()
    });

    it("should display error message if email is null", () => {
      cy.get('[data-cy="email"]').type("testadmin@gmail.com")
      cy.get('[data-cy="password"]').type("testadmin123")
      cy.get('[data-cy="submit"]').click()
    })
  });

  describe("Test End-to-End Sign Out Function", () => {
    it("should display the sign out dropdown", () => {

    })
  })
})