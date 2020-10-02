// let homePageElements = require('../pagesElements/homePageElements')
let homePage = function() {

    let getStartedButton = element(by.xpath("//span[contains(text(),'Get Started')]"));

    this.getURL = function(URL){
        browser.get(URL);
    }; 

    this.clickGetStarted = function(){
        getStartedButton.click();
    };
};

export default homePage;