import { getURL } from '../pagesFunction/homePage';

describe('Sign up test', function(){
    
    it('Goto Home page', function(){
        getURL('https://dev.admitkard.net/');
        // browser.get('https://dev.admitkard.net/');
    });

});