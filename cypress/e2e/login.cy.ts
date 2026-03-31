import { LoginPage } from '../pages/LoginPage';

describe('Login website', () => {

  const loginPage = new LoginPage();

 // beforeEach(() => {
  //  loginPage.visit();
 // });

  it('User logs in with valid credentials and is authenticated', () => {
    loginPage.visit();
    loginPage.login('ujwala789@gmail.com', '123456');
  
    cy.contains('Shopping cart').should('be.visible');
  });

  it('User tries wrong password and sees proper error', () => {
    loginPage.visit();
    loginPage.login('ujwala789@gmail.com', '12345667');

    cy.get(loginPage.errorMsg)
      .should('be.visible')
      .and('contain', 'Login was unsuccessful');
  });

  it('User clicks login without entering anything', () => {
    loginPage.visit();
    cy.get(loginPage.loginBtn).click();

    cy.get(loginPage.errorMsg).should('be.visible');
  });

});