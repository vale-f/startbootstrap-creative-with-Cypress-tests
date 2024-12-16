import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import '../step_definitions/commonSteps';
import GetStartedLocators from '../locators/getstartedLocators';


//Scenario: Clicking "About" should scroll to the correct section

When('I click the "Get started!" button', () => {
    cy.clickButton(GetStartedLocators.getStartedButton)
})
