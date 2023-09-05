import { $ } from '@wdio/globals';
import Page from './page.js';

class ContactPage extends Page {

    get firstNameErrorMsg() {
        return $('.hs-firstname .hs-error-msg');
    }

    get lastNameErrorMsg() {
        return $('.hs-lastname .hs-error-msg');
    }

    get emailErrorMsg() {
        return $('.hs-email .hs-error-msg');
    }

    get countryErrorMsg() {
        return $('.hs-country__new_ .hs-error-msg');
    }

    get howCanWeHelpYouErrorMsg() {
        return $('.hs-how_can_we_help_you_ .hs-error-msg');
    }

    get legalConsentErrorMsg() {
        return $('.hs-dependent-field .hs-error-msg');
    }

    get rollupErrorMsg() {
        return $('.hs_error_rollup .hs-error-msgs');
    }

    get btnSubmit () {
        return $('input[type="submit"].hs-button');
    }

    async switchToIframeForm() {
        const formIframe = await $('.hs-form-iframe')
        await browser.switchToFrame(formIframe);
    }

    async submitEmptyContactForm() {
        await this.btnSubmit.click();
    }

    open() {
        return super.open('contact/');
    }

    removeCookieBar() {
        return super.removeCookieBar();
    }

}

export default new ContactPage();
