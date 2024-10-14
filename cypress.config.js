import { defineConfig } from "cypress";

export default defineConfig({
  projectId: '77vmng',
  e2e: {
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
