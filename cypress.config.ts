import { defineConfig } from 'cypress';
import setupNodeEvents from './cypress/plugins/index.js'

export default defineConfig({
  projectId: 'zyter_saucedemo',
  fixturesFolder: './cypress/fixtures',
  screenshotsFolder: './screenshots',
  reporter: './node_modules/mochawesome',
  reporterOptions: {
    reportDir: './report',
    overwrite: false,
    html: true,
    json: true,
  },
  viewportHeight: 1080,
  viewportWidth: 1920,
  chromeWebSecurity: false,
  defaultCommandTimeout: 30000,
  requestTimeout: 30000,
  pageLoadTimeout: 120000,
  video: false,
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    specPattern: './cypress/e2e/*.cy.ts',
    supportFile: './cypress/support/e2e.ts',
    setupNodeEvents,
  },
});
