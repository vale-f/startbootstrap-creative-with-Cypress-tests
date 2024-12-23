@images
Feature: Images visibility

    Background: 
        Given I am on the homepage

    Scenario: Hovering over the images shows their project name and category
        When I hover over on an image
        Then I should see the project category followed by the project name on top of the image

    Scenario: Clicking an image displays it in a larger size
        When I click on an image
        Then the image should be displayed in a larger size in a modal

    Scenario: When an image is in modal mode, clicking the arrow displays the next/previous image
        When an image is in modal mode and I click the arrow
        Then the next or previous image should be displayed