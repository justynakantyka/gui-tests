import { $ } from '@wdio/globals'
import Page from './page.js';

class ContactPage extends Page {

    getContactFormButton() {
        return $('input[type="submit"].hs-button');
    }

    getFirstNameErrorMsg() {
        return $('.hs-firstname .hs-error-msg');
    }

    getLastNameErrorMsg() {
        return $('.hs-lastname .hs-error-msg');
    }

    getEmailErrorMsg() {
        return $('.hs-email .hs-error-msg');
    }

    getCountryErrorMsg() {
        return $('.hs-country__new_ .hs-error-msg');
    }

    getHowCanWeHelpYouErrorMsg() {
        return $('.hs-how_can_we_help_you_ .hs-error-msg');
    }

    removeCookieBar() {
        return super.removeCookieBar();
    }

    open() {
        return super.open('contact/');
    }
}

export default new ContactPage();
