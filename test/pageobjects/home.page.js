import { $ } from '@wdio/globals'
import Page from './page.js';

class HomePage extends Page {

    async getNavigationMenuItemByText(bookmark) {
        return $('.header-nav-main.nav-right').$(`.nav-top-link=${bookmark}`);
    }

    open() {
        return super.open('');
    }
}

export default new HomePage();
