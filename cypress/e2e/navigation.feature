@navigation
Feature: Navigation bar functionality

    Background: 
        Given I am on the homepage

    @about-button
    Scenario: Clicking "About" should scroll to the correct section
        When I click the "About" link
        Then I should see the "We have got what you need!" section in the viewport

    @services-button
    Scenario: Clicking "Services" should scroll to the correct section
        When I click the "Services" link
        Then I should see the "At Your Service" section in the viewport

    @portfolio-button
    Scenario: Clicking "Portfolio" should scroll to the correct section
        When I click the "Portfolio" link
        Then I should see the images section in the viewport

    @contact-button
    Scenario: Clicking "Contact" should scroll to the correct section
        When I click the "Contact" link
        Then I should see the "Lets Get In Touch!" section in the viewport