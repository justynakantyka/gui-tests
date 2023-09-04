import { browser } from '@wdio/globals'

export default class Page {

    async removeCookieBar() {
        await $('.flatsome-cookies--active').waitForDisplayed();
        await browser.execute(() => {
            var cookieElement = document.getElementsByClassName('flatsome-cookies--active')[0];
            if(cookieElement) {
                cookieElement.setAttribute("class", "flatsome-cookies flatsome-cookies--inactive");
              }
        });
    }

    open (path) {
        return browser.url(`/${path}`)
    }
}
