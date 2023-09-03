import { expect } from '@wdio/globals';
import HomePage from '../pageobjects/home.page.js';

describe('Homepage', () => {
    it('should verify if specific bookmarks are visible', async () => {
        await HomePage.open();
        const navExpectedBookmarks = ['Banking', 'Insurance', 'Finance & ESG', 'Services', 'Partners', 'Company', 'Resources'];
        for (const expectedBookmark of navExpectedBookmarks) {
            const header = await HomePage.getNavigationMenuItemByText(expectedBookmark);
            await expect(header).toBeDisplayed();
        }
    });
})
