const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 60000,
  defaultCommandTimeout: 6000,
  env: {
   url : "https://proscanportal.opendr.com/"
  },
  retries: {
    runMode: 1,
    },
  projectId: "z2xp1q",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern : 'cypress/integration/examples/*.js'
  },
});
