# https://vitejs.dev/guide/env-and-mode.html
interface ImportMetaEnv {
  readonly VITE_MEASUREMENT_ID?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface Window {
  gtag?: (...args: unknown[]) => void
  dataLayer?: unknown[]
}
