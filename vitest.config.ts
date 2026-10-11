import { defineConfig } from 'vitest/config';

// Test config (R3-985 introduced the app's first testable units; R3-994 adds the
// component tests, so the environment moves node → jsdom with globals, the
// sibling contribute-panel's shape — the same harness drives this app's
// Contribute over the mocked SDK). Kept separate from vite.config.ts so the
// production build stays plugin-clean; no React plugin is needed here —
// esbuild's automatic JSX runtime handles the tsx transform.
export default defineConfig({
  esbuild: { jsx: 'automatic' },
  server: { host: '127.0.0.1' }, // this VM's /etc/hosts has no `localhost` entry
  test: {
    environment: 'jsdom',
    globals: true,
  },
});
