import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "900"],
})

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
    <>
      <style
        jsx
        global
      >{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>

      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}
