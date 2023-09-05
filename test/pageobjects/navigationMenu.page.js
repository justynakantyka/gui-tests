import { $ } from '@wdio/globals'

class NavigationMenuPage {

    get getInTouchButton () {
        return $('.header-nav-main.nav-right').$('.header-button');
    }

    getBookmark(bookmark) {
        return $('.header-nav-main.nav-right').$(`.nav-top-link=${bookmark}`);
    }

    getBookmarkItem(item) {
        return $('.menu-item.current-dropdown').$(`.ux-menu-link__text=${item}`);
    }

    async clickBookmarkItem (bookmark, item) {
        await this.getBookmark(bookmark).moveTo();
        await this.getBookmarkItem(item).click();
    }

    async clickGetIntouchButton () {
        await this.getInTouchButton.click();
    }

}

export default new NavigationMenuPage();
