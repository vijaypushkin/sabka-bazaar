import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
// import "@testing-library/jest-dom/vitest";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./src/tests/setup.test.ts"],
    // testMatch: ["./tests/**/*.test.tsx"],
    globals: true,
    coverage: {
      provider: "v8",
    },
  },
});
