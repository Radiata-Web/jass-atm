import type { ReactNode } from "react"
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
  useRouterState,
} from "@tanstack/react-router"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { PostHogErrorBoundary, PostHogProvider } from "posthog-js/react"
import { useEffect } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import * as gtag from "@/lib/gtag"
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
    scripts: gtag.GA_TRACKING_ID
      ? [
          {
            src: `https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`,
            async: true,
          },
          {
            children: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          },
        ]
      : [],
  }),
  component: RootComponent,
})

function RootComponent() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })

  useEffect(() => {
    gtag.pageview(pathname)
  }, [pathname])

  const app = (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Outlet />
      <Footer />
    </ChakraProvider>
  )

  if (!posthogApiKey || !posthogHost) {
    if (import.meta.env.DEV) {
      const missingVariable = !posthogApiKey
        ? "VITE_PUBLIC_POSTHOG_PROJECT_TOKEN"
        : "VITE_PUBLIC_POSTHOG_HOST"
      throw new Error(
        `${missingVariable} variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once ${missingVariable} is configured`,
      )
    }

    return <RootDocument>{app}</RootDocument>
  }

  return (
    <RootDocument>
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
          {app}
        </PostHogErrorBoundary>
      </PostHogProvider>
    </RootDocument>
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
