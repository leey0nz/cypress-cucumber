const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/reports/cucumber-json/",
  reportPath: "./cypress/reports/cucumber-html/",
  metadata: {
    browser: {
      name: "chrome",
      version: "126.0.6478.128",
    },
    device: "Local test machine",
    platform: {
      name: "windows",
    },
  },
});
