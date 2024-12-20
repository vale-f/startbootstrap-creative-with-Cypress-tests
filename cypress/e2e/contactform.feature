Feature: Contact form

    Background: 
        Given I am on the homepage

    Scenario: Filling the form correctly should allow the user to submit it successfully
        When I complete the fields with valid inputs
        And I click "Submit"
        Then the form should be submitted successfully

    Scenario: Leaving the "Full name" field empty should not allow the user to submit the form successfully
        When I leave the "Full name" field empty
        Then I should see the error message for "Full name": "A name is required."
        And the "Submit" button should be disabled

    Scenario: Leaving the "Email address" field empty should not allow the user to submit the form successfully
        When I leave the "Email address" field empty
        Then I should see the error message for "Email address": "An email is required."
        And the "Submit" button should be disabled

    Scenario: Leaving the "Phone number" field empty should not allow the user to submit the form successfully
        When I leave the "Phone number" field empty
        Then I should see the error message for "Phone number": "A phone number is required."
        And the "Submit" button should be disabled

    Scenario: Leaving the "Message" field empty should not allow the user to submit the form successfully
        When I leave the "Message" field empty
        Then I should see the error message for "Message": "A message is required."
        And the "Submit" button should be disabled

    Scenario: Filling the form with an email missing the "@" symbol should not allow the user to submit it successfully
        When I add "testexample.com", no @", to the "Email address" address
        Then I should see the error message: "Email is not valid."
        And the "Submit" button should be disabled

    Scenario: Filling the form with an email missing the domain part should not allow the user to submit it successfully
        When I add "test@", no domain, to the "Email address" address
        Then I should see the error message: "Email is not valid."
        And the "Submit" button should be disabled

    Scenario: Filling the form with an email containing multiple "@" symbols should not allow the user to submit it successfully
        When I add "test@@example.com", multiple "@", to the "Email address" address
        Then I should see the error message: "Email is not valid."
        And the "Submit" button should be disabled

    Scenario: Filling the form with an email containing spaces should not allow the user to submit it successfully
        When I add "test @example.com", a space, to the "Email address" address
        Then I should see the error message: "Email is not valid."
        And the "Submit" button should be disabled