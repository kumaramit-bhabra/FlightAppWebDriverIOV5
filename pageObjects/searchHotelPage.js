const baseConfig = require("../config/baseConfig");
const pageFactConfig = require("../config/pageFactory");

class searchHotelPage {
  
    validateUserName() {
    const loggedUserName = $(pageFactConfig.shLoggedUserName).getValue();
    return loggedUserName.includes(baseConfig.UserName);
  }
}

module.exports = new searchHotelPage();