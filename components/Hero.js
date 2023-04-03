import { Image } from "@chakra-ui/next-js"
import {
  Box,
  Button,
  Flex,
  Heading,
  Highlight,
  Stack,
  StackItem,
} from "@chakra-ui/react"
import React from "react"

const Hero = () => {
  return (
    <Flex
      py={{ base: 20, md: 10 }}
      px={{ base: 5, md: 500 }}
      height={{ base: "50vh" }}
      maxW="calc(100vw - 1px)"
    >
      {/* CTA Blurb */}
      <Stack spacing={2} direction={{ base: "column" }}>
        <StackItem order={{ base: 2, md: 1 }}>
          <Heading
            as="h1"
            size="2xl"
            mb={8}
            noOfLines={{ base: 6, md: 3 }}
            maxWidth={{ base: "100%" }}
          >
            Empower your customers and{" "}
            <Highlight
              query="free your business"
              styles={{ color: "brand.500" }}
            >
              free your business
            </Highlight>{" "}
            from the needs of managing an ATM.
          </Heading>

          {/* CTA Button */}
          <Button colorScheme="brand" size="lg" mb={8}>
            See what we offer
          </Button>
        </StackItem>
        <StackItem>
          <Box>
            <Image
              src="/CreditCardAtm.png"
              alt="JASS ATM Hero"
              width={500}
              height={320}
            />
          </Box>
        </StackItem>
      </Stack>
    </Flex>
  )
}

export default Hero
