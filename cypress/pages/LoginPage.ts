export class LoginPage {
    emailInput = '#Email';
    passwordInput = '#Password';
    loginBtn = '.button-1.login-button';
    errorMsg = '.validation-summary-errors';

    visit() {
        cy.visit('/login');
    }
    login(email: string, password: string) {
        cy.get(this.emailInput).type(email);
        cy.get(this.passwordInput).type(password);
        cy.get(this.loginBtn).click();
    }
    clcikLogin() {
        cy.get(this.loginBtn).click();
    }
}