/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    css: false, // This disables CSS processing during tests,
    include: ['src/**/*.test.ts'],
    coverage: {
      reporter: ['text', 'json', 'html', 'lcov'],
    },
  },
  //
  css: {
    postcss: {},  // Disable PostCSS processing
    modules: false,  // Disable CSS modules
  },
})
