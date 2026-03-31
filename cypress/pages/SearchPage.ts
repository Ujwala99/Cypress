export class SearchPage {
    searchInput = '#search';
    searchBtn = '#searchBtn';
    results = '.result-item';
    noResults = '.no-results';

    search(text: string) {
        cy.get(this.searchInput)
    }
}