import Page from './page.js';

class HomePage extends Page {

    open() {
        return super.open('');
    }

    removeCookieBar() {
        return super.removeCookieBar();
    }
}

export default new HomePage();
