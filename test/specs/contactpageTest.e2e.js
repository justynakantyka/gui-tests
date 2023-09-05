import { expect } from '@wdio/globals';
import ContactPage from '../pageobjects/contact.page.js';
import { REQUIRED_FIELD_ERROR_MSG, REQUIRED_DROPDOWN_ERROR_MSG, ALL_REQUIRED_FIELDS_ERROR_MSG } from '../enums/errorMessages.js';

describe('Contact Page', () => {
    beforeEach(async function() {
        await ContactPage.open();
        await ContactPage.removeCookieBar();
    });

    it('should verify if the appropriate validation messages appeared after submitting empty form', async () => {
        await ContactPage.switchToIframeForm();
        await ContactPage.submitEmptyContactForm();
        const firstnameErrorMsg = ContactPage.firstNameErrorMsg;
        const lastnameErrorMsg = ContactPage.lastNameErrorMsg;
        const emailErrorMsg = ContactPage.emailErrorMsg;
        const coutryErrorMsg = ContactPage.countryErrorMsg;
        const howCanWeHelpYouErrorMsg = ContactPage.howCanWeHelpYouErrorMsg;
        const legalConsentErrorMsg = ContactPage.legalConsentErrorMsg;
        const rollupErrorMsg = ContactPage.rollupErrorMsg;

        await expect(firstnameErrorMsg).toHaveText(REQUIRED_FIELD_ERROR_MSG);
        await expect(lastnameErrorMsg).toHaveText(REQUIRED_FIELD_ERROR_MSG);
        await expect(emailErrorMsg).toHaveText(REQUIRED_FIELD_ERROR_MSG);
        await expect(coutryErrorMsg).toHaveText(REQUIRED_DROPDOWN_ERROR_MSG);
        await expect(howCanWeHelpYouErrorMsg).toHaveText(REQUIRED_FIELD_ERROR_MSG);
        await expect(legalConsentErrorMsg).toHaveText(REQUIRED_FIELD_ERROR_MSG);
        await expect(rollupErrorMsg).toHaveText(ALL_REQUIRED_FIELDS_ERROR_MSG);
    });
});
