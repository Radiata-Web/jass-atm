import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

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
