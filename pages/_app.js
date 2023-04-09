import "@fontsource/inter/400.css"
import "@fontsource/inter/700.css"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function App({ Component, pageProps }) {
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
      <ChakraProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </>
  )
}
