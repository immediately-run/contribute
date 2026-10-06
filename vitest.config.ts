import { defineConfig } from 'vitest/config';

// Test config for the pure `src/lib` unit tests (R3-985 introduced the app's first
// testable units). Kept separate from vite.config.ts so the production build stays
// plugin-clean; no DOM needed — these are pure functions.
export default defineConfig({
  server: { host: '127.0.0.1' }, // this VM's /etc/hosts has no `localhost` entry
  test: {
    environment: 'node',
  },
});
