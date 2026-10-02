// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.

import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// nitro reads its mount path from NITRO_APP_BASE_URL when the config is
// loaded; mirror the vite base so prerendered routes match the router's
// derived basepath.
process.env["NITRO_APP_BASE_URL"] ??= process.env["VITE_BASE_PATH"] ?? "/";

export default defineConfig({
  vite: {
    // Deployments under a subpath (e.g. GitHub Pages at /<repo>/) set
    // VITE_BASE_PATH; TanStack Start derives the router basepath from this.
    base: process.env["VITE_BASE_PATH"] ?? "/",
  },

  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts
    // (our SSR error wrapper).
    server: { entry: "server" },

    // Cloudflare Pages builds this project differently from the existing
    // Worker deployment. Disable prerendering only when Cloudflare Pages
    // is performing the build.
    prerender: {
      enabled: process.env["CF_PAGES"] !== "1",
      crawlLinks: true,
    },
  },
});
