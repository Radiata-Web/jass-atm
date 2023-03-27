import { Image } from "@chakra-ui/next-js"
import {
  Button,
  Container,
  Heading,
  Highlight,
  Stack,
  StackItem,
} from "@chakra-ui/react"
import React from "react"

const Hero = () => {
  return (
    <Container py={8} height={{ base: "80%" }}>
      {/* CTA Blurb */}
      <Stack spacing={2} direction={{ base: "column", sm: "row" }}>
        <StackItem>
          <Heading as="h1" size="2xl" mb={8}>
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
          <Image
            src="/CreditCardAtm.png"
            alt="JASS ATM Hero"
            width={500}
            height={500}
          />
        </StackItem>
      </Stack>
    </Container>
  )
}

export default Hero
