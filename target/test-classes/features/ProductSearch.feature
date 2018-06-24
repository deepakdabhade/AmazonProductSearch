#Author: Deepak Dabhade
#Keywords Summary : Create Selenium Web browser test using cucumber scenarios for amazon.com 
#Feature: Search Nikon products on Amazon site
#Scenario: Search the product and verify the availability of expected product
#Given: Amazon.com
#When: Search Nikon and sort results from highest price to slowest.
#Then: Select second product and click it for details.
#And,But: From details check (verify with assert) that product topic contains text “Nikon D3X”
#Background: User is on Amazon home page

@ProductSearch
Feature: Search Nikon Products on Amazon.com
  As a user of Amazon
  I want to be able to search for product using keywords

  Background: User navigates to Amazon home page
    Given I am on 'Amazon' page on URL 'http://www.amazon.com'
    Then I should see Search box

  Scenario: Product Details
    When I fill in 'Nikon' and press Search button
    And I get List of 'Nikon' Products
    And I Select Option 'Price: High to Low'
    And I Select Second Product in List
    Then I can see Product Title Containing 'Nikon D3X'
