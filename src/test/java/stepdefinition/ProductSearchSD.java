package stepdefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import functions.Functions;

public class ProductSearchSD {
	Functions az = new Functions();
	
	@Given("^I am on 'Amazon' page on URL 'http://www.amazon.com'$")
    public void amozon_homepage() throws Throwable {
        az.openAppliction();
    }
	@Then("^I should see Search box$")
    public void searchbox() throws Throwable {
       az.searchBox();    
    }

    @When("^I fill in 'Nikon' and press Search button$")
    public void search() throws Throwable {
    	az.searchKeyword();
    }
  
    @When("^I get List of 'Nikon' Products$")
    public void product_list() throws Throwable {
    	az.productList();
    }
    
    @When("^I Select Option 'Price: High to Low'$")
    public void sort() throws Throwable {
    	az.sort();
     }
    
    @When("^I Select Second Product in List$")
    public void select_product() throws Throwable {
    	az.selectProduct();
     }

    @Then("^I can see Product Title Containing 'Nikon D3X'$")
    public void product_title() throws Throwable {
    	az.productTitle();
    	//sf.closeBrowser();
    }
}
