describe('Smoke test Login Page', () => {
  it('opens the Tricentis shopping website', () => {
    cy.visit('https://demowebshop.tricentis.com/')
    cy.get('title').invoke('text').should('include', 'Demo Web Shop')

    
  })
});
