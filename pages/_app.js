import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import localFont from "next/font/local"

const inter = localFont({ src: "./Inter.ttf" })

export default function App({ Component, pageProps }) {
  const theme = extendTheme({
    colors: {
      brand: {
        300: "#009AB1",
        500: "#247BA0",
      },
    },
  })

  return (
    <ChakraProvider
      theme={theme}
      className={inter.className}
    >
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
