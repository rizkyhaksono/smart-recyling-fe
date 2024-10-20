context("Report Trash Modules", () => {
  describe("Test End-to-End Report Trash Page", () => {
    beforeEach(() => {
      cy.visit("https://smartrecycling.natee.me/signin")
    });

    it("should display the sign in page", () => {
      cy.get('#email').type("testadmin@gmail.com")
      cy.get('#password').type("testadmin123")
      cy.get('button[type="submit"]').click()
    });

    it('cy.setCookie() - set a browser cookie', () => {
      cy.getCookies().should('be.empty')
      cy.setCookie('access_token', 'test_cypress')
      cy.setCookie('refresh_token', 'test_cypress')
      cy.setCookie('user_role', 'USER')
      cy.getCookie('access_token').should('have.property', 'value', 'test_cypress')
      cy.reload(true)
      cy.visit("https://smartrecycling.natee.me/report")
    })
  });
})