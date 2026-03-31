import {HomePage} from '../pages/HomePage';
import {LoginPage} from '../pages/LoginPage';

describe('Basic navigation sanity checks', () => {

  it('Homepage loads properly', () => {
    cy.visit('/');

    cy.get('.header-logo').should('be.visible');
    cy.title().should('contain', 'Demo Web Shop');
  });

  it('User navigates to Books category', () => {
    cy.visit('/');

    cy.contains('Books').click();

    cy.url().should('include', 'books');
  });

});