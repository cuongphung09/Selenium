require("chromedriver");
const { Builder, By, Key, until } = require("selenium-webdriver");
const { Options } = require("selenium-webdriver/chrome");
const { DriverService } = require("selenium-webdriver/remote");
const setting = require("../setting.json");
var assert = require("chai").assert;

describe("Home(not logged in)", function () {
  this.timeout(0);
  let driver;
  before(async () => {
    const chromeOpts = [
      "--disable-dev-shm-usage",
      '--user-agent="Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) coc_coc_browser/91.0.146 Chrome/85.0.4183.146 Safari/537.36"',
      "--start-maximized",
    ];
    driver = await new Builder()
      .setChromeOptions(new Options().addArguments(chromeOpts))
      .forBrowser("chrome")
      .build();
    await driver.get(setting.mkpURL);
    // await driver.sleep(5000);
  });
  it("checking homepage link", async function () {
    try {
      // await driver.get(setting.mkpURL);
      var actual = await driver
        .findElement(
          By.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]")
        )
        .getAttribute("href");
      assert.equal(actual, setting.homeURL);
    } finally {
    }
  });
  it("checking marketplace link", async function () {
    try {
      // await driver.get(setting.mkpURL);
      var actual = await driver
        .findElement(
          By.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]")
        )
        .getAttribute("href");
      assert.equal(actual, "https://footballbattle.co/");
    } finally {
    }
  });
  it("have connect wallet button", async function () {
    try {
      // await driver.get(setting.mkpURL);
      var actual = await driver
        .findElement(By.xpath("(//img[@alt='connect wallet button'])[1]"))
        .getTagName();
      assert.equal(actual, "img");
    } finally {
    }
  });
  it("should have buy players", async function () {
    try {
      // await driver.get(setting.mkpURL);
      var playersClick = await driver
        .findElement(
          By.xpath(
            "(//span[@class='transition duration-700 cursor-pointer font-2p-12 tab-item-lm mr-7 tab-item px-2 pb-2 border-b-2 border-transparent text-white text-tiny font-PS2P font-bold uppercase tab-active font-bold uppercase'])[1]"
          )
        )
        .click();
      var buyClick = await driver
        .findElement(
          By.xpath(
            "(//span[@class='cursor-pointer px-3 md:px-6 pb-2 pt-2 text-tiny rounded-full truncate font-PS2P w-1/2 text-center border-8 border-solid border-none outline-none relative z-[2] text-white uppercase font-2p-12 tab-title btn-yellow3 bg-yellow text-darkRed h-[50px]'])[1]"
          )
        )
        .click();
      await driver.sleep(3000);
      let note = await driver
        .findElement(
          By.css("div[class='font-2p-12 mt-5 lg:mt-4 mb-4 float-left']")
        )
        .getText();
      assert.notEqual(note, "0 Result(s)");
    } finally {
    }
  });
  it("should have mint players", async function () {
    try {
      // await driver.get(setting.mkpURL);
      var playersClick = await driver
        .findElement(
          By.xpath(
            "(//span[@class='transition duration-700 cursor-pointer font-2p-12 tab-item-lm mr-7 tab-item px-2 pb-2 border-b-2 border-transparent text-white text-tiny font-PS2P font-bold uppercase tab-active font-bold uppercase'])[1]"
          )
        )
        .click();
      var mintClick = await driver
        .findElement(
          By.xpath(
            "(//span[@class='cursor-pointer px-3 md:px-6 pb-2 pt-2 text-tiny rounded-full truncate font-PS2P w-1/2 text-center border-8 border-solid border-none outline-none relative z-[2] text-white uppercase font-2p-12 tab-title'])[1]"
          )
        )
        .click();
      await driver.sleep(3000);
      let note = await driver
        .findElement(
          By.css("div[class='font-2p-12 mt-5 lg:mt-4 mb-4 float-left']")
        )
        .getText();
      assert.notEqual(note, "0 Result(s)");
    } finally {
    }
  });
  it("check sort by", async function () {
    try {
      await driver.get(setting.mkpURL);
      var sortByClick = await driver
        .findElement(By.xpath("//span[@class='float-right rotate-180']"))
        .click();
      await driver.sleep(2000);
      var sort1 = await driver
        .findElement(By.xpath("//p[normalize-space()='Price: low to high']"))
        .click();
      await driver.sleep(2000);
      var sortByClick = await driver
        .findElement(By.xpath("//span[@class='float-right rotate-180']"))
        .click();
      await driver.sleep(2000);
      var sort1 = await driver
        .findElement(By.xpath("//p[normalize-space()='Price: high to low']"))
        .click();
      await driver.sleep(2000);
      var sortByClick = await driver
        .findElement(By.xpath("//span[@class='float-right rotate-180']"))
        .click();
      await driver.sleep(2000);
      var sort1 = await driver
        .findElement(
          By.xpath("(//p[normalize-space()='Stats: low to high'])[1]")
        )
        .click();
      await driver.sleep(2000);
      var sortByClick = await driver
        .findElement(By.xpath("//span[@class='float-right rotate-180']"))
        .click();
      await driver.sleep(2000);
      var sort1 = await driver
        .findElement(
          By.xpath("(//p[normalize-space()='Stats: high to low'])[1]")
        )
        .click();
      await driver.sleep(2000);
    } finally {
    }
  });
  it("check package", async function () {
    try {
      await driver.get(setting.mkpURL);
      var packageClick = await driver
        .findElement(
          By.xpath(
            "(//span[@class='transition duration-700 cursor-pointer font-2p-12 tab-item-lm mr-7 tab-item px-2 pb-2 border-b-2 border-transparent text-white text-tiny font-PS2P font-bold uppercase'][normalize-space()='Packages'])[1]"
          )
        )
        .click();
      await driver.sleep(5000);
      var title = await driver
        .findElement(
          By.xpath("(//p[@class='font-2p-22 mb-6 uppercase text-yellow'])[1]")
        )
        .getText();
      assert.equal(title, "BEGINNER BOX");
    } finally {
    }
  });
  it("check rent", async function () {
    try {
      await driver.get(setting.mkpURL);
      var packageClick = await driver
        .findElement(
          By.xpath(
            "(//span[@class='transition duration-700 cursor-pointer font-2p-12 tab-item-lm mr-7 tab-item px-2 pb-2 border-b-2 border-transparent text-white text-tiny font-PS2P font-bold uppercase'][normalize-space()='Rent'])[1]"
          )
        )
        .click();
      await driver.sleep(5000);
      var cURL = await driver.getCurrentUrl();
      assert.equal(cURL, "https://fbmarket.klabs.life/marketplace/rental");
    } finally {
    }
  });
  
  after(async () => {
    await driver.close();
  });
});
