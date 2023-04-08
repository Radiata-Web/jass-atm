import "@fontsource/inter/400.css"
import "@fontsource/inter/700.css"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"

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
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}
