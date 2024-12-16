Feature: "Find out more" button functionality

    Scenario: Clicking "Find out more" should scroll to the correct section
        Given I am on the homepage
        When I click the "Find out more" button
        Then I should see the "We have got what you need!" section in the viewport