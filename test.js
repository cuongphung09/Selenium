const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");
async function example(){
    var searchString = "Automation";

    let driver = await new Builder().forBrowser("chrome").build();
    
    await driver.get("http://google.com");

    await driver.findElement(By.name("q")).sendKeys(searchString,Key.RETURN);

    var title = await driver.getTitle();
    console.log(title);

    await driver.quit();
}

example();