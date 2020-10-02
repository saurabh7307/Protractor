exports.config = {
    directConnect: true,

    capabilities: {
        'browserName': 'chrome'
    } ,
    framework: 'jasmine',

    specs: ['../pagesTests/SignUpTest.js'],
    
    jasmineNodeOpts: {
        defaultTimeOutInterval: 30000
    }
};