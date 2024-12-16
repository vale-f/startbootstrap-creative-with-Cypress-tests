import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ImagesPage from '../pages/imagesPage';
import '../step_definitions/commonSteps';

const imagesPage = new ImagesPage();


//Scenario: Hovering over the images shows their project name and  category

When('I hover over on an image', () => {
    //This is executed in the next step while checking the project category and project name.
})

Then('I should see the project category followed by the project name on top of the image', () => {
    imagesPage.hoverOnImageAndProjectInfo()
})


//Scenario: Clicking an image displays it in a larger size

When('I click on an image', () => {
    //This is executed in the next step while checking the display of the larger size image
})


Then('the image should be displayed in a larger size in a modal', () => {
    imagesPage.imageModal()
})



//Scenario: When an image is in modal mode, clicking the arrow displays the next/previous image

When('an image is in modal mode and I click the arrow', () => {
    //This is executed in the next step while checking the display of the larger size image
})


Then('the next or previous image should be displayed', () => {
    imagesPage.imageNext()
    imagesPage.imagePrevious()
})