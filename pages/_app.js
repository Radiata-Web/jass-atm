import { ChakraProvider, extendTheme } from "@chakra-ui/react"

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
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
