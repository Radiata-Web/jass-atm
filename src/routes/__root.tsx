import { useEffect, useState, type ReactNode } from "react"
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { PostHogErrorBoundary, PostHogProvider } from "posthog-js/react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import appCss from "@/styles/globals.css?url"
import "@fontsource/inter/400.css"
import "@fontsource/inter/700.css"

const posthogApiKey = import.meta.env.VITE_PUBLIC_POSTHOG_PROJECT_TOKEN
const posthogHost = import.meta.env.VITE_PUBLIC_POSTHOG_HOST

const theme = extendTheme({
  colors: {
    brand: {
      300: "#009AB1",
      500: "#247BA0",
    },
  },
  fonts: {
    heading: `Inter, sans-serif`,
    body: `Inter, sans-serif`,
  },
})

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        name: "description",
        content:
          "Jass ATM Sales & Service is a family-owned company based in Jacksonville, Florida focused on providing reliable and customer-forward services.",
      },
    ],
    links: [
      { rel: "icon", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  if (import.meta.env.DEV && (!posthogApiKey || !posthogHost)) {
    const missingVariable = !posthogApiKey
      ? "VITE_PUBLIC_POSTHOG_PROJECT_TOKEN"
      : "VITE_PUBLIC_POSTHOG_HOST"
    throw new Error(
      `${missingVariable} variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once ${missingVariable} is configured`,
    )
  }

  return (
    <RootDocument>
      <ClientPostHog>
        <ChakraProvider theme={theme}>
          <Navbar />
          <Outlet />
          <Footer />
        </ChakraProvider>
      </ClientPostHog>
    </RootDocument>
  )
}

// PostHog must not init during SSR/prerender — relative api_host (/ingest)
// would fetch the ephemeral prerender server and time out the Netlify build.
function ClientPostHog({ children }: Readonly<{ children: ReactNode }>) {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (posthogApiKey && posthogHost) setEnabled(true)
  }, [])

  if (!enabled || !posthogApiKey || !posthogHost) return children

  return (
    <PostHogProvider
      apiKey={posthogApiKey}
      options={{
        api_host: posthogHost,
        defaults: "2025-05-24",
        capture_exceptions: true,
        debug: import.meta.env.DEV,
        logs: {
          serviceName: "jass-atm-web",
          environment: import.meta.env.MODE,
        },
      }}
    >
      <PostHogErrorBoundary
        fallback={<main>Something went wrong. Please try again later.</main>}
      >
        {children}
      </PostHogErrorBoundary>
    </PostHogProvider>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
