describe('Smoke test', () => {
  it('opens the Cypress example site', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('Kitchen Sink').should('be.visible')
  })
});

it('Loginform', function() {});

it('EnterCredentials', function() {});