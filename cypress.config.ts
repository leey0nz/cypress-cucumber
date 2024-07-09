import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import {
  addCucumberPreprocessorPlugin,
  afterRunHandler,
} from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";
const fs = require("fs");

export default defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      on("after:run", async (results) => {
        if (results) {
          await afterRunHandler(config);
          try {
            fs.mkdirSync("cypress/reports/data-result");
          } catch (error) {}
          await fs.writeFile(
            "cypress/reports/data-result/results.json",
            JSON.stringify(results)
          );
        }
      });
      // on('after:run', (results) => {
      //   if (results) {
      //     fs.mkdirSync("cypress/reports1");
      //     // fs.writeFile("cypress/reports1/hoang-results.json", JSON.stringify(results));
      //   }
      // })

      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
  },
});
