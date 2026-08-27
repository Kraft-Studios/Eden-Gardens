// dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Set only by the GitHub Pages workflow (.github/workflows/deploy.yml). This app has no
// server functions or loaders, so for that build we skip nitro/SSR entirely and let
// TanStack Start prerender every route to plain static HTML in dist/client — nitro's own
// SSR build pipeline doesn't get along with TanStack Start's prerender in this setup.
// All other builds (local dev, Cloudflare) are unaffected.
const isGhPagesBuild = process.env.GH_PAGES_BUILD === "1";

// GitHub Pages serves this repo at /Eden-Gardens/ (a project page, not a custom
// domain), so every asset/route URL needs that prefix baked in at build time.
const base = isGhPagesBuild ? "/Eden-Gardens/" : "/";

export default defineConfig({
  vite: { base },
  ...(isGhPagesBuild ? { nitro: false } : {}),
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(isGhPagesBuild ? { prerender: { enabled: true, crawlLinks: true } } : {}),
  },
});
