@contact-us @regression
Feature: WebdriverUniversity - Contact Us Page

    Background: Pre-conditions
        Given I Navigate to WebdriverUniversity homepage
        When I click on the contact us button

        # Scenario: Valid Contact Us Form Submission
        When I type a first name
        When I type a last name
        When I enter an email address
        When I type a comment
        When I click on the submit button
        Then I should be presented with a successful contact us submission message

    Scenario: Invalid Contact Us Form Submission
        When I type a first name
        When I type a last name
        When I type a comment
        When I click on the submit button
        Then I should be presented with a unsuccessful contact us submission message

    Scenario: Valid Contact Us Form Submission - Using specific data
        When I type a specific first name "Tiger"
        When I type a specific last name "Wolf"
        When I type a specific email address "tiger.wolf3839@mail.com"
        When I type a specific word "Hello" and number 3839 within the comment input field
        When I click on the submit button
        Then I should be presented with a successful contact us submission message

    Scenario Outline: Validate Contact Us Page
        When I type a first name <firstName> and a last name '<lastName>'
        When I type a '<emailAddress>' and a comment '<comment>'
        When I click on the submit button
        Then I should be presented with header text '<message>'

        Examples:
            | firstName | lastName | emailAddress         | comment | message                      |
            | Tiger     | Trinh    | tiger.trinh@mail.com | hello   | Thank You for your Message!  |
            | Kitty     | Tran     | kitty.tran@mail.com  | hi      | Thank You for your Message!  |
            | Lion      | Nguyen   | lion.nguyen          | bello   | Error: Invalid email address |