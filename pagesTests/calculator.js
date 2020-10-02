describe('demo calculator test ', function(){
    it('addition', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        browser.sleep(2000); //miliseconds 
        var inputFirst = element(by.model('first'));
        inputFirst.sendKeys('123');
        var inputSecond = element(by.model('second'));
        inputSecond.sendKeys('123');
        browser.sleep(2000);
        var goButton = element(by.css('[ng-click="doAddition()"]'));
        goButton.click();
        let result = element(by.cssContainingText('.ng-binding', '246'));
        expect(result.getText()).toEqual('246');
        // console.log(result.getText());
    });

    // it('subtraction', function() {
        
    // });

    // it('multiply', function() {
        
    // });
});