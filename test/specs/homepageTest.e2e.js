import { expect } from '@wdio/globals';
import HomePage from '../pageobjects/home.page.js';

describe('Homepage', () => {
    beforeEach(async function() {
        await HomePage.open();
    });

    it('should verify if specific bookmarks are visible', async () => {
        const navExpectedBookmarks = ['Banking', 'Insurance', 'Finance & ESG', 'Services', 'Partners', 'Company', 'Resources'];
        for (const expectedBookmark of navExpectedBookmarks) {
            const header = await HomePage.getNavigationMenuItemByText(expectedBookmark);
            await expect(header).toBeDisplayed();
        }
    });

    it('should verify redirection to "Optimise accounting & finance" page after clicking "Finance & ESG" -> "Financial Control" bookmark', async () => {
        const navigationMenuItem = HomePage.getNavigationMenuItemByText('Finance & ESG');
        await navigationMenuItem.click();
        const menuItemFinance = HomePage.getBookmarkItem('Financial Control');
        await menuItemFinance.click();

        await expect(browser).toHaveUrl('https://www.sapfioneer.com/finance-esg/financial-control/');
    });

    it('should verify redirection to Contact page after clicking "Get in touch" button', async () => {
        const getInTouchButton = HomePage.getInTouchButton();
        await getInTouchButton.click();

        await expect(browser).toHaveUrl('https://www.sapfioneer.com/contact/');
    });
});
