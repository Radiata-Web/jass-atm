import "@fontsource/inter/400.css"
import "@fontsource/inter/700.css"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { useRouter } from "next/router"
import { useEffect } from "react"
import * as gtag from "../lib/gtag"
import Head from "next/head"
import Script from "next/script"

export default function App({ Component, pageProps }) {
  const router = useRouter()

  // Google Analytics
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

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

  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <ChakraProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </>
  )
}
