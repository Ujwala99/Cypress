export class LoginPage {
    emailInput = '#Email';
    passwordInput = '#Password';
    loginBtn = '.button-1.login-button';
    errorMsg = '.validation-summary-errors';

    visit() {
        cy.visit('/login');
    }
    login(email: string, password: string) {
        cy.get(this.emailInput).clear().type(email);
        cy.get(this.passwordInput).clear().type(password);
        cy.get(this.loginBtn).click();
    }
    
}