import { defineConfig } from "vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import netlify from "@netlify/vite-plugin-tanstack-start"
import viteReact from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  server: {
    port: 3000,
  },
  // Prerender spins up vite preview then fetch()es pages. Prefer IPv4 so Netlify
  // builders don't burn ~seconds timing out on unreachable ::1 for "localhost".
  preview: {
    host: "127.0.0.1",
  },
  // posthog-js/react ships ESM without "type":"module", so Node treats named
  // imports as CJS and blows up on Netlify SSR. Bundle it instead.
  ssr: {
    noExternal: ["posthog-js"],
  },
  plugins: [
    tsconfigPaths(),
    tanstackStart({
      // Static marketing pages — serve from CDN, don't burn Netlify Functions.
      prerender: {
        enabled: true,
        crawlLinks: false,
        concurrency: 1,
        // Preview server can race ready on CI (TanStack/router#6322).
        retryCount: 10,
        retryDelay: 500,
        failOnError: true,
      },
    }),
    netlify(),
    viteReact(),
  ],
})

