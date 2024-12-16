import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import NavigationPage from '../pages/navigationPage';
import NavigationLocators from '../locators/navigationLocators';

//Background
//I should see the "We have got what you need!" section in the viewport
//I should see the "At Your Service" section in the viewport
import '../step_definitions/commonSteps';

//For using the functions waitUntilVisible(section) and checkSection(section)
import CommonPage from '../pages/commonPage';


const navigationPage = new NavigationPage();
const commonPage = new CommonPage();

//Scenario: Clicking "About" should scroll to the correct section

When('I click the "About" link', () => {
    cy.clickButton(NavigationLocators.aboutButton)
})


//Scenario: Clicking "Services" should scroll to the correct section

When('I click the "Services" link', () => {
    cy.clickButton(NavigationLocators.servicesButton)
})



//Scenario: Clicking "Portfolio" should scroll to the correct section

When('I click the "Portfolio" link', () => {
    cy.clickButton(NavigationLocators.portfolioButton)
})

Then('I should see the images section in the viewport', () => {
    commonPage.checkSection(NavigationLocators.imagesSection);
    navigationPage.checkImages()
})



//Scenario: Clicking "Contact" should scroll to the correct section

When('I click the "Contact" link', () => {
    cy.clickButton(NavigationLocators.contactButton)
})

Then('I should see the "Lets Get In Touch!" section in the viewport', () => {
    commonPage.checkSection(NavigationLocators.getInTouch);
})