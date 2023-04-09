import { Image, Link } from "@chakra-ui/next-js"
import { Flex, Box, Text, Stack, SimpleGrid, Spacer } from "@chakra-ui/react"
import Radiata from "./Radiata"

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <>
      <Flex
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
          direction="row"
          width="100%"
          maxW="1600px"
        >
          {/* Logo left */}
          <Box>
            <Stack align="center">
              <Stack
                direction="row"
                align="center"
                spacing={4}
              >
                <Image
                  src="/jass-logo.png"
                  alt="Jass ATM Logo"
                  height={50}
                  width={50}
                />
                <Text
                  fontSize="2xl"
                  fontWeight="bold"
                >
                  Jass ATM
                </Text>
              </Stack>
            </Stack>
          </Box>

          {/* Links middle */}
          <Box>
            <Stack
              direction="row"
              spacing={4}
              color="gray.600"
              align="center"
              justify="center"
            >
              <Link
                href="/"
                _hover={{ color: "brand.500" }}
              >
                Home
              </Link>
              <Link
                href="/#company"
                _hover={{ color: "brand.500" }}
              >
                Company
              </Link>
              <Link
                href="/#services"
                _hover={{ color: "brand.500" }}
              >
                Services
              </Link>
              <Link
                href="/#contact"
                _hover={{ color: "brand.500" }}
              >
                Contact
              </Link>
            </Stack>
          </Box>

          {/* Ad right  */}
          <Box>
            <Radiata />
          </Box>
        </Flex>
      </Flex>
    </>
  )
}

export default Footer
