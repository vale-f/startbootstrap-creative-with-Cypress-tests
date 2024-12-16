import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CommonPage from '../pages/commonPage';
import CommonLocators from '../locators/commonLocators';

const commonPage = new CommonPage();

Given('I am on the homepage', () => {
    commonPage.visit()
  });

Then('I should see the "We have got what you need!" section in the viewport', () => {
    commonPage.checkSection(CommonLocators.whatYouNeed);
})

Then('I should see the "At Your Service" section in the viewport', () => {
    commonPage.checkSection(CommonLocators.yourService);
})