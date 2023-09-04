import { expect } from '@wdio/globals';
import ContactPage from '../pageobjects/contact.page.js';
import { REQUIRED_INPUT_ERROR_MSG, REQUIRED_DROPDOWN_ERROR_MSG } from '../enums/errorMessages.js';

describe('Contact Page', () => {
    beforeEach(async function() {
        await ContactPage.open();
        await ContactPage.removeCookieBar();
    });

    it('should verify if the appropriate validation messages appeared after submitting empty form', async () => {
        await browser.switchToFrame(0);
        const submitButton =  ContactPage.getContactFormButton();
        await submitButton.click();
        const firstnameErrorMsg = ContactPage.getFirstNameErrorMsg();
        const lastnameErrorMsg = ContactPage.getLastNameErrorMsg();
        const emailErrorMsg = ContactPage.getEmailErrorMsg();
        const coutryErrorMsg = ContactPage.getCountryErrorMsg();
        const howCanWeHelpYouErrorMsg = ContactPage.getHowCanWeHelpYouErrorMsg();
        await expect(firstnameErrorMsg).toHaveText(REQUIRED_INPUT_ERROR_MSG);
        await expect(lastnameErrorMsg).toHaveText(REQUIRED_INPUT_ERROR_MSG);
        await expect(emailErrorMsg).toHaveText(REQUIRED_INPUT_ERROR_MSG);
        await expect(coutryErrorMsg).toHaveText(REQUIRED_DROPDOWN_ERROR_MSG);
        await expect(howCanWeHelpYouErrorMsg).toHaveText(REQUIRED_INPUT_ERROR_MSG);
    });
});
