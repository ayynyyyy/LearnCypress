const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    testIsolation : false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
},
{
  "compilerOptions": {
    "target": "es6",
    "lib": ["es6", "dom"],
    "types": ["cypress", "node"]
  },
  "include": ["**/*.js", "**/*.ts"]
}

);
