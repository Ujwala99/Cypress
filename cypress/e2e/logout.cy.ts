import { LoginPage } from "../pages/LoginPage";
import { LogoutPage } from "../pages/LogoutPage";

describe ('Log in and logout from website', () => {

    const loginPage = new LoginPage();
    const logoutPage = new LogoutPage();
   
    it('User will Logout after Log-in',() => {
        loginPage.visit();
        loginPage.login('ujwala789@gmail.com', '123456');
        logoutPage.logout();
    
})

}

)