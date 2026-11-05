import { Flex, Box, Text, Stack, Image, Link as ChakraLink } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import type { ReactNode } from "react"
import Radiata from "./Radiata"

function FooterLink({
  href,
  children,
}: {
  href: string
  children: ReactNode
}) {
  const isHash = href.includes("#")

  if (isHash) {
    return (
      <ChakraLink href={href} _hover={{ color: "brand.500" }}>
        {children}
      </ChakraLink>
    )
  }

  return (
    <ChakraLink as={RouterLink} to={href} _hover={{ color: "brand.500" }}>
      {children}
    </ChakraLink>
  )
}

const Footer = () => {
  return (
    <Flex
      as="footer"
      minHeight={175}
      py={{ base: 16, md: 20 }}
      px={{ base: 4, md: 20 }}
      borderTop="1px"
      borderColor="gray.200"
      align="center"
      justify="center"
    >
      <Flex
        justify="space-between"
        align="center"
        direction={{ base: "column", md: "row" }}
        gap={{ base: 8, md: 0 }}
        width="100%"
        maxW="1600px"
      >
        <Box>
          <Stack align="center">
            <Stack direction="row" align="center" spacing={4}>
              <Image
                src="/jass-logo.png"
                alt="Jass ATM Logo"
                height={50}
                width={50}
              />
              <Text fontSize="2xl" fontWeight="bold">
                Jass ATM
              </Text>
            </Stack>
          </Stack>
        </Box>

        <Box>
          <Stack
            as="nav"
            aria-label="Footer"
            direction="row"
            spacing={4}
            color="gray.600"
            align="center"
            justify="center"
            my={{ base: 4, md: 0 }}
            fontSize={{ base: "sm", md: "md" }}
          >
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/#company">Company</FooterLink>
            <FooterLink href="/#services">Services</FooterLink>
            <FooterLink href="/#contact">Contact</FooterLink>
            <FooterLink href="/atms">ATMs</FooterLink>
          </Stack>
        </Box>

        <Box>
          <Radiata />
        </Box>
      </Flex>
    </Flex>
  )
}

export default Footer
