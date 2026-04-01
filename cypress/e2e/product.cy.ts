import { ProductPage } from "../pages/ProductPage";
import { LoginPage } from '../pages/LoginPage';

describe ('notification on screen when all the details are not selected to place an order', () => 

    const product = new ProductPage();
    const loginPage = new LoginPage();

    it('select the category', () => {
        loginPage.visit();
        product.Shop();
        cy.contains('Create Your own Jewelry').click();
        cy.get('#product_attribute_71_9_15').select(1);
        cy.get('#add-to-cart-button-71').click();

        cy.get(product.notification).should('be.visible');
    }

    )
)
