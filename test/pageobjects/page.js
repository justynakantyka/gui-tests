import { browser } from '@wdio/globals'

export default class Page {

    async removeCookieBar() {
        await browser.setCookies({
            name: 'flatsome_cookie_notice',
            value: '1'
        })
        browser.refresh();
    }

    open (path) {
        return browser.url(`/${path}`)
    }
}
