import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import DownloadButtonPage from '../pages/downloadbuttonPage';
import '../step_definitions/commonSteps';

const downloadButtonPage = new DownloadButtonPage();


//Scenario: Clicking "Download Now!" should redirect the user to https://startbootstrap.com/theme/creative

When('I click the "Download Now!" button', () => {
    downloadButtonPage.clickDownloadNow()
})


Then('I should be redirected to the URL', () => {
    downloadButtonPage.verifyUrlStatus();
})
