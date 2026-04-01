export class SearchPage {
    searchInput = '#small-searchterms';
    searchBtn = '.button-1.search-box-button';
    results = '.search-results';
    noResults = '.result';

    visit() {
    cy.visit('/login'); }

    search(text: string) {
        cy.get(this.searchInput).clear().type(text)
    
    }
    clickSearch() {
        cy.get(this.searchBtn).click()
    }
    verifyResults() {
        cy.get(this.results).should('be.visible')
    }
    verifyNoResults() {
        cy.get(this.noResults).should('contain','No products were found');
    }
}