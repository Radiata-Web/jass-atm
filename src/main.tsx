import "@fontsource/inter/400.css"
import "@fontsource/inter/700.css"
import "@/styles/globals.css"

import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import { ChakraProvider } from "@chakra-ui/react"
import App from "./App"
import { theme } from "./theme"
import { GA_TRACKING_ID } from "./lib/gtag"

function loadAnalytics() {
  if (!GA_TRACKING_ID) return

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args)
  }
  window.gtag("js", new Date())
  window.gtag("config", GA_TRACKING_ID, {
    page_path: window.location.pathname,
  })

  const script = document.createElement("script")
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`
  document.head.appendChild(script)
}

loadAnalytics()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
