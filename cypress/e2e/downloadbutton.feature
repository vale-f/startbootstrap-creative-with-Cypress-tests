Feature: "Download Now!" button functionality

    @download-button
    Scenario: Clicking "Download Now!" should redirect the user to https://startbootstrap.com/theme/creative
        Given I am on the homepage
        When I click the "Download Now!" button
        Then I should be redirected to the URL