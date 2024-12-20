import ContactFormLocators from '../locators/contactformLocators';


class ContactFormPage {

    checkErrorMessage(field, errorMessage)
    {
        cy.get(field).should('be.visible').should('have.text', errorMessage);
    }

    checkSuccessfulMessage(successfulMessage)
    {
        cy.get(ContactFormLocators.successfulMessageLocation).should('be.visible').should('have.text', successfulMessage);
    }

    submitButtonDisabled()
    {
        cy.get(ContactFormLocators.submitButton).should('have.class', 'disabled');
    }

    emailWithSpace(invalidEmail)
    {
    cy.get(ContactFormLocators.emailField)
    .invoke('attr', 'type', 'text')  // Change input type to text
    .clear()
    .type(invalidEmail)  // Type the email with a space
    .invoke('attr', 'type', 'email');  // Switch back to email type if needed
    }
}

export default ContactFormPage;