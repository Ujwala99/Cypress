
import { SearchPage } from "../pages/SearchPage";

describe ('Search funtionality', () => {
    const searchpage = new SearchPage;

    it('Search an Item', () => {
        searchpage.visit();

        searchpage.search('Book');
        searchpage.clickSearch();
        searchpage.verifyResults();
    })

    it('search item is not found', () => {
        searchpage.visit();
        searchpage.search('Chocolate');
        searchpage.clickSearch();
        searchpage.verifyNoResults(); 
    })
})