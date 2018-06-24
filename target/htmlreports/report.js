$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ProductSearch.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 21,
  "name": "Search Product",
  "description": "As a user of Amazon\r\nI want to be able to search for product using keywords",
  "id": "search-product",
  "keyword": "Feature",
  "tags": [
    {
      "line": 20,
      "name": "@ProductSearch"
    }
  ]
});
formatter.background({
  "line": 25,
  "name": "User navigates to Amazon home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 26,
  "name": "I am on \u0027Amazon\u0027 page on URL \u0027http://www.amazon.com\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I should see Search box",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductSearchSD.amozon_homepage()"
});
formatter.result({
  "duration": 19112103810,
  "status": "passed"
});
formatter.match({
  "location": "ProductSearchSD.searchbox()"
});
formatter.result({
  "duration": 71567917,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Product Details",
  "description": "",
  "id": "search-product;product-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "I fill in \u0027Nikon\u0027 and press Search button",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I get List of \u0027Nikon\u0027 Products",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I Select Option \u0027Price: High to Low\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I Select Second Product in List",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I can see Product Title Containing \u0027Nikon D3X\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductSearchSD.search()"
});
formatter.result({
  "duration": 518839899,
  "status": "passed"
});
formatter.match({
  "location": "ProductSearchSD.product_list()"
});
formatter.result({
  "duration": 5539494672,
  "status": "passed"
});
formatter.match({
  "location": "ProductSearchSD.sort()"
});
formatter.result({
  "duration": 545307619,
  "status": "passed"
});
formatter.match({
  "location": "ProductSearchSD.select_product()"
});
formatter.result({
  "duration": 8473090963,
  "status": "passed"
});
formatter.match({
  "location": "ProductSearchSD.product_title()"
});
formatter.result({
  "duration": 117588789,
  "error_message": "java.lang.AssertionError: Title not matching expected [Nikon D3X] but found [Nikon AF-S FX NIKKOR 800mm f/5.6E FL ED Vibration Reduction Fixed Zoom Lens with Auto Focus for Nikon DSLR Cameras]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat com.cucumber.Selenium.SeleniumFunctions.productTitle(SeleniumFunctions.java:68)\r\n\tat stepdefinition.ProductSearchSD.product_title(ProductSearchSD.java:43)\r\n\tat ✽.Then I can see Product Title Containing \u0027Nikon D3X\u0027(ProductSearch.feature:34)\r\n",
  "status": "failed"
});
});