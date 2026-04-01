export class ProductPage {
    selectJewelry = '.create-it-yourself-jewelry'
    Material = '#product_attribute_71_9_15'
    notification = '.bar-notification-error'
    addToCart = '#add-to-cart-button-71'

    visit() {
    cy.visit('/login'); }

    Shop() {
        cy.contains('Jewelry').click();
        cy.get(this.selectJewelry).click();
        cy.get(this.Material).select('Gold');
        cy.get(this.addToCart).click();
        cy.get(this.notification).should('be.visible');
       

    }
