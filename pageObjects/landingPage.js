const pageFactLandingPage = require("../config/pageFactory");
const baseConfig = require("../config/baseConfig");
class landingPage {

  clickLoginBttn() {
    $(pageFactLandingPage.lpUserName).setValue(baseConfig.UserName);
    $(pageFactLandingPage.lpPassword).setValue(baseConfig.password); 
    $(pageFactLandingPage.lpLoginBttn).click();
  }
}
module.exports = new landingPage();
