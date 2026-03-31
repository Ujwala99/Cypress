export class ProductPage {

    addToCartBtn = '#add-to-cart-button-31';
    successBar = '.bar-notification.success';

    addToCart() {
        cy.get(this.addToCartBtn).click();
    }
    
}