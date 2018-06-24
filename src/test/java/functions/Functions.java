package functions;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;

public class Functions {
	public static WebDriver driver;
	
	public void openAppliction(){
		 
		 System.setProperty("webdriver.chrome.driver", "C:\\Selenium\\chromedriver.exe");
		 driver=new ChromeDriver();
		 System.out.println("Opened Chrome Browser");
		 driver.manage().window().maximize();
		 driver.get("http://www.amazon.com");
		 driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		 System.out.println("Launched amazon.com");
	}
	public void searchBox()
	{
		WebElement search = driver.findElement(By.id("twotabsearchtextbox"));
	    search.isDisplayed();
	    driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	    System.out.println("Search text box available");
	}
	public void searchKeyword()
	{
		WebElement search = driver.findElement(By.id("twotabsearchtextbox"));
	    search.sendKeys("Nikon");
	    driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	    System.out.println("Search keyword 'Nikon'");
	}

	public void productList()
	{
		WebElement SearchButton = driver.findElement(By.className("nav-input"));
	    SearchButton.click();
	    driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	    System.out.println("Product list is available");
	}
	public void sort()
	{
		WebElement sortdropdown = driver.findElement(By.id("sort"));
	    sortdropdown.click();
	    driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	    System.out.println("Clicked on Sort dropdown");
	    WebElement SelectOption = driver.findElement(By.id("sort"));
	    Select dropdown= new Select(SelectOption);
	    dropdown.selectByIndex(3);
	    driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	    System.out.println("Selected 'High to Low' price option");
	}
	
	public void selectProduct()
	{
		WebElement productlist = driver.findElement(By.xpath("//*[@id='result_1']/div/div/div/div[2]/div[1]/div[1]/a/h2"));
		productlist.click();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}
	
	public void productTitle()
	{
		
		WebElement producttitle = driver.findElement(By.xpath("//*[@id='productTitle']"));
		String actualTitle = producttitle.getText();	      
	    String expectedTitle = "Nikon D3X";      
        Assert.assertEquals(actualTitle,expectedTitle,"Product title not matching"); 
        System.out.println("Product title not matching");
    }
	public void closeBrowser()
	{
		driver.close();
	}
}
