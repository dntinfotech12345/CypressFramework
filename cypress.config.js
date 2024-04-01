const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}



module.exports = defineConfig({
  "reporter": "mochawesome",
  "reporterOptions": {
     "reportDir": "cypress/reports",
     "overwrite": false,
     "html": true,
     "json": true
  },


  

  defaultCommandTimeout: 6000,  
  env:{
    url:'https://www.rahulshettyacademy.com'
  },
  projectId: "35owcy",
  retries: {
    runMode: 1,
    },
  e2e: {
   
    setupNodeEvents,
      // implement node event listeners here,
    // specPattern: 'cypress/integration/examples/BDD/ecommerce*.feature',
    specPattern: 'cypress/integration/examples/*.js',
    // specPattern: 'cypress/integration/examples/APITesting/*.js'
    
  }, 
  
})
