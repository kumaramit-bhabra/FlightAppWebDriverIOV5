const baseConfig = require("../config/baseConfig");
const landingPage = require("../pageObjects/landingPage.js");
const searchHotelPage = require("../pageObjects/searchHotelPage");
const assert = require("chai").assert;

beforeEach (function()
{
    browser.urlAndMaxWindow();
    landingPage.clickLoginBttn();
})

describe("Validate the functionality associated with the Search Hotel Page",()=>{
    it("Validate the title of the Search hotel Page",()=>{
        browser.getTitle();
        expect(browser.getTitle()).to.equal("AdactIn.com - Search Hotel");
    })

    it("Validate the logged in user name is being displayed",()=>{
        const isUNDisplayed = searchHotelPage.validateUserName();
        console.log("############  "+isUNDisplayed)
        expect(isUNDisplayed, "User Name is not displayed").to.be.true;
    })
})

