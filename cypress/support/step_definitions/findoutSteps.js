import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import '../step_definitions/commonSteps';
import FindOutLocators from '../locators/findoutLocators';


//Scenario: Clicking "About" should scroll to the correct section

When('I click the "Find out more" button', () => {
    cy.clickButton(FindOutLocators.findOutMoreButton)
})
