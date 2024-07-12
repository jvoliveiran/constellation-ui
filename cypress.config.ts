import { defineConfig } from "cypress";

export default defineConfig({
  experimentalStudio: true,
  env: {
    baseUrl: 'http://localhost:3000',
  },
  e2e: {},
  defaultCommandTimeout: 20000,
});
