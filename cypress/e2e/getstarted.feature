Feature: "Get started!" button functionality

    @getstarted-button
    Scenario: Clicking "Get started!" should scroll to the correct section
        Given I am on the homepage
        When I click the "Get started!" button
        Then I should see the "At Your Service" section in the viewport