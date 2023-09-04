import { $ } from '@wdio/globals'
import Page from './page.js';

class HomePage extends Page {

    getNavigationMenuItemByText(bookmark) {
        return $('.header-nav-main.nav-right').$(`.nav-top-link=${bookmark}`);
    }

    getBookmarkItem(item) {
        return $('.menu-item.current-dropdown').$(`.ux-menu-link__text=${item}`);
    }

    getInTouchButton () {
        return $('.header-nav-main.nav-right').$('.header-button');
    };

    removeCookieBar () {
        return super.removeCookieBar();
    }

    open() {
        return super.open('');
    }
}

export default new HomePage();
