const baseConfig = require("../config/baseConfig");
const landingPage = require("../pageObjects/landingPage.js");
const assert = require("chai").assert;


beforeEach(function(){
  browser.urlAndMaxWindow();
})

describe("Validate the landing page of the Flight App", () => {
  it("Check the title of the page", () => {
    const pageTitle = browser.getTitle();
    assert.strictEqual(pageTitle, "AdactIn.com - Hotel Reservation System");
  });

  it("Add commands", () => {
    const landingPageData = browser.getUrlAndTitle();
    expect(landingPageData.title).to.equal("AdactIn.com - Hotel Reservation System");
    expect(landingPageData.title).to.contain("AdactIn.com - Hotel Reservation System");
    assert.equal(landingPageData.title,"AdactIn.com - Hotel Reservation System");
  });

  it("User is able to login with valid credentials", () => {
    landingPage.clickLoginBttn();
    expect(browser.getTitle()).to.not.have.string("AdactIn.com - Hotel Reservation System");
  });
//AdactIn.com - Search Hotel
  /*it("Test waitForExist", () => {
    //https://webdriver.io/docs/api/element/waitForExist.html
    browser.url("http://www.webdriveruniversity.com/");
    const clickByXpathSelector = $('//h1[text()="AJAX LOADER"]/..');
    clickByXpathSelector.click();
    browser.switchWindow("WebDriver | Ajax-Loader");

    //Wait for an element for the provided amount of milliseconds to be present within the DOM.
    const clickMeButton = $('//*[text()="CLICK ME!"]/..');
    clickMeButton.waitForExist(40000);
    clickMeButton.click();
  }); //test will fail... even though its in the DOM doesnt mean it clickable

  it("Test waitForDisplayed", () => {
    //https://webdriver.io/docs/api/element/waitForDisplayed.html
    browser.url("http://www.webdriveruniversity.com/");
    const clickByXpathSelector = $('//h1[text()="AJAX LOADER"]/..');
    clickByXpathSelector.click();
    browser.switchWindow("WebDriver | Ajax-Loader");

    //Wait for an element for the provided amount of milliseconds to be displayed/or not displayed.
    const clickMeButton = $('//*[text()="CLICK ME!"]/..');
    clickMeButton.waitForDisplayed(100000);
    clickMeButton.click();
  }); //test will pass...

  it("Test waitForEnabled", () => {
    //https://webdriver.io/docs/api/element/waitForEnabled.html
    browser.url("http://www.webdriveruniversity.com/");
    const clickByXpathSelector = $('//h1[text()="AJAX LOADER"]/..');
    clickByXpathSelector.click();
    browser.switchWindow("WebDriver | Ajax-Loader");

    const clickMeButton = $('//*[text()="CLICK ME!"]/..');
    //Wait for an element (selected by css selector) for the provided amount of milliseconds to be (dis/en)abled.
    //clickMeButton.waitForEnabled(10000, true); //will check whether the element is enabled and wait for it to turn false (Become Disabled) - will cause the test to fail
    console.log(
      "Wait for Enabled part 1 #####" +
      clickMeButton.waitForEnabled(10000, false)
    ); //will check whether the element is enabled - will pass

    //true: waits for element to become disabled- this test will fail
    browser.pause(8000);
    //clickMeButton.waitForEnabled(10000, true);
    clickMeButton.click();

    //false: waits for element to become enabled - this test will pass
    //browser.pause(8000);
    //clickMeButton.waitForEnabled(10000, false);
    //clickMeButton.click();
  }); //test will fail

  it("Test Fixed Timeout", () => {
    //https://webdriver.io/docs/api/browser/pause.html
    const clickByXpathSelector = $('//h1[text()="AJAX LOADER"]/..');
    clickByXpathSelector.click();
    browser.switchWindow("WebDriver | Ajax-Loader");

    const clickMeButton = $('//*[text()="CLICK ME!"]/..');
    browser.pause(12000);
    clickMeButton.click();
  }); //test will pass

  it("Change the background colour", () => {
    browser.url("http://www.webdriveruniversity.com/");
    browser.execute(() => {
      return (document.body.style.backgroundColor = "Red");
    });
    browser.pause(5000);
  });*/
  
});
