export class LogoutPage {
    emailInput = '#Email'
    passwordInput = '#Password'
    loginBtn = '#ico-login'
    RememberMe = '#RememberMe'
    logoutBtn = '.ico-logout'

    visit() {
    cy.visit('/login');
}
login(Email:string, Password:string) {
    cy.get(this.emailInput).type(Email);
    cy.get(this.passwordInput).type(Password);
    cy.get(this.RememberMe).check();
    cy.get(this.loginBtn).click();
    
}
logout() {
    cy.get(this.logoutBtn).click();
}
}