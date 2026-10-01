import { defineConfig } from "vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import netlify from "@netlify/vite-plugin-tanstack-start"
import viteReact from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  server: {
    port: 3000,
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
        crawlLinks: true,
        failOnError: true,
      },
    }),
    netlify(),
    viteReact(),
  ],
})

