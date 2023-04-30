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
      py={{ base: 16, md: 20 }}
      px={{ base: 5, md: 20 }}
      justify="center"
      align="center"
    >
      {/* CTA Blurb */}
      <Stack
        spacing={{ base: 0, lg: 20 }}
        direction={{ base: "column", md: "row" }}
        align="center"
        maxW="1600px"
      >
        {/* Text */}
        <StackItem maxW={{ base: "100%", lg: "50%" }} justify="center">
          <Heading
            as="h1"
            size="2xl"
            mb={14}
            lineHeight="1.1"
            fontFamily="Inter"
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
          <Button
            as="a"
            colorScheme="brand"
            size="lg"
            mb={8}
            fontFamily="Inter"
            href="#services"
            width={{ base: "100%", lg: "auto" }}
          >
            See what we offer
          </Button>
        </StackItem>
        <StackItem w="50%" h="100%">
          {/* Hero Image */}
          <Image
            priority={true}
            src="/CreditCardAtm.png"
            alt="JASS ATM Hero"
            width={500}
            height={500}
            display={{ base: "none", lg: "block" }}
            float="right"
            mr={14}
          />
        </StackItem>
      </Stack>
    </Flex>
  )
}

export default Hero
