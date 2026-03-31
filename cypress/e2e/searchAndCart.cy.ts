import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';

describe('Search and add to cart flow ', () => {

  const home = new HomePage();
  const product = new ProductPage();

  beforeEach(() => {
    cy.visit('/');
  });

  it('User searches for a product and opens it', () => {
    home.searchProduct('laptop');

    cy.get(home.productTitles)
      .should('have.length.greaterThan', 0);

    home.openFirstProduct();

    cy.url().should('not.include', 'computer');
  });

  it('User adds a product to cart and sees success notification', () => {
    home.searchProduct('computer');
    home.openFirstProduct();

    product.addToCart();

    cy.get(product.successBar)
      .should('be.visible')
      .and('contain', 'The product has been added');
  });

});