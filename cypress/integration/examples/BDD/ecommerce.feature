Feature: End to End Ecommerce Validation

    Application Regression

    Scenario: Ecommerce products delivery
        Given I open Ecommerce page
        When I add items to Cart
        And validate the total prices
        Then Select the country submit and verify Thankyou