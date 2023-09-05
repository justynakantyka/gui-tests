import { expect } from '@wdio/globals';
import * as bookmarkEnums from '../enums/navigationBookmarks.js';
import * as financeESGItemsEnums from '../enums/financeESGItems.js';
import * as urlEndpoints from '../enums/urlEndpoints.js';
import HomePage from '../pageobjects/homepage.page.js';
import NavigationMenuPage from '../pageobjects/navigationMenu.page.js';

describe('Navigation Menu', () => {
    beforeEach(async function() {
        await HomePage.open();
        await HomePage.removeCookieBar();
    });

    it('should verify if specific bookmarks are visible', async () => {
        const navExpectedBookmarks = [ 
            bookmarkEnums.BANKING, 
            bookmarkEnums.INSURANCE, 
            bookmarkEnums.FINANCE_ESG, 
            bookmarkEnums.SERVICES, 
            bookmarkEnums.PARTNERS, 
            bookmarkEnums.COMPANY, 
            bookmarkEnums.RESOURCES
        ];

        for (const expectedBookmark of navExpectedBookmarks) {
            const bookmark = await NavigationMenuPage.getBookmark(expectedBookmark);
            await expect(bookmark).toBeDisplayed();
        }
    });

    it('should verify redirection to "Optimise accounting & finance" page after clicking "Finance & ESG" -> "Financial Control" bookmark', async () => {
        await NavigationMenuPage.clickBookmarkItem(bookmarkEnums.FINANCE_ESG, financeESGItemsEnums.FINANCIAL_CONTROL);

        await expect(browser).toHaveUrl(`${baseUrl}/${urlEndpoints.FINANCIAL_CONTROL}`);
    });

    it('should verify redirection to Contact page after clicking "Get in touch" button', async () => {
        await NavigationMenuPage.clickGetIntouchButton();

        await expect(browser).toHaveUrl(`${baseUrl}/${urlEndpoints.CONTACT}`);
    });
});
