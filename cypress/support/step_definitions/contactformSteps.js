import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ContactFormPage from '../pages/contactformPage';
import ContactFormLocators from '../locators/contactformLocators';

//Background
import '../step_definitions/commonSteps';

const contactFormPage = new ContactFormPage();

let name = 'Jane Doe';
let validEmail = 'jane@mailinator.com';
let phoneNumber = '12345678';
let message = 'Hello. This is a message.';



//Scenario: Filling the form correctly should allow the user to submit it successfully

When('I complete the fields with valid inputs', () => {
    cy.addInput(ContactFormLocators.nameField, name);
    cy.addInput(ContactFormLocators.emailField, validEmail);
    cy.addInput(ContactFormLocators.phoneField, phoneNumber);
    cy.addInput(ContactFormLocators.messageField, message);
})

When('I click "Submit"', () => {
    cy.clickButton(ContactFormLocators.submitButton);
})

Then('the form should be submitted successfully', () => {
    contactFormPage.checkSuccessfulMessage('Form submission successful!');
})



//Scenario: Leaving the "Full name" field empty should not allow the user to submit the form successfully

When('I leave the "Full name" field empty', () => {
    cy.clickButton(ContactFormLocators.nameField);
    cy.addInput(ContactFormLocators.emailField, validEmail);
    cy.addInput(ContactFormLocators.phoneField, phoneNumber);
    cy.addInput(ContactFormLocators.messageField, message);
})

Then('I should see the error message for "Full name": {string}', (nameRequired) => {
    contactFormPage.checkErrorMessage(ContactFormLocators.errorMessageLocation_name, nameRequired);
})

Then('the "Submit" button should be disabled', () => {
   contactFormPage.submitButtonDisabled();
})



//Scenario: Leaving the "Email address" field empty should not allow the user to submit the form successfully

When('I leave the "Email address" field empty', () => {
    cy.addInput(ContactFormLocators.nameField, name);
    cy.clickButton(ContactFormLocators.emailField);
    cy.addInput(ContactFormLocators.phoneField, phoneNumber);
    cy.addInput(ContactFormLocators.messageField, message);
})

Then('I should see the error message for "Email address": {string}', (emailRequired) => {
    contactFormPage.checkErrorMessage(ContactFormLocators.errorMessageLocation_requiredEmail, emailRequired);
})



//Scenario: Leaving the "Phone number" field empty should not allow the user to submit the form successfully

When('I leave the "Phone number" field empty', () => {
    cy.addInput(ContactFormLocators.nameField, name);
    cy.addInput(ContactFormLocators.emailField, validEmail);
    cy.clickButton(ContactFormLocators.phoneField);
    cy.addInput(ContactFormLocators.messageField, message);
})

Then('I should see the error message for "Phone number": {string}', (phoneNumberRequired) => {
    contactFormPage.checkErrorMessage(ContactFormLocators.errorMessageLocation_phone, phoneNumberRequired);
})



//Leaving the "Message" field empty should not allow the user to submit the form successfully

When('I leave the "Message" field empty', () => {
    cy.addInput(ContactFormLocators.nameField, name);
    cy.addInput(ContactFormLocators.emailField, validEmail);
    cy.clickButton(ContactFormLocators.messageField);
    cy.addInput(ContactFormLocators.phoneField, phoneNumber);
})

Then('I should see the error message for "Message": {string}', (messageRequired) => {
    contactFormPage.checkErrorMessage(ContactFormLocators.errorMessageLocation_message, messageRequired);
})



//Scenario: Filling the form with an email missing the "@" symbol should not allow the user to submit it successfully

When('I add {string}, no @", to the "Email address" address', (invalidEmail) => {
    cy.addInput(ContactFormLocators.emailField, invalidEmail);
    cy.clickButton(ContactFormLocators.phoneField);
})

Then('I should see the error message: {string}', (emailErrorMessage) => {
    contactFormPage.checkErrorMessage(ContactFormLocators.errorMessageLocation_invalidEmail, emailErrorMessage);
})




//Scenario: Filling the form with an email missing the domain part should not allow the user to submit it successfully

When('I add {string}, no domain, to the "Email address" address', (invalidEmail) => {
    cy.addInput(ContactFormLocators.emailField, invalidEmail);
    cy.clickButton(ContactFormLocators.phoneField);
})



//Scenario: Filling the form with an email containing multiple "@" symbols should not allow the user to submit it successfully

When('I add {string}, multiple "@", to the "Email address" address', (invalidEmail) => {
    cy.addInput(ContactFormLocators.emailField, invalidEmail);
    cy.clickButton(ContactFormLocators.phoneField);
})



//Scenario: Filling the form with an email containing spaces should not allow the user to submit it successfully

When('I add {string}, a space, to the "Email address" address', (invalidEmail) => {
    contactFormPage.emailWithSpace(invalidEmail);
    cy.clickButton(ContactFormLocators.phoneField);
})
