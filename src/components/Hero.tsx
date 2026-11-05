import {
  Box,
  Button,
  Flex,
  Heading,
  Highlight,
  Image,
  Stack,
} from "@chakra-ui/react"

const Hero = () => {
  return (
    <Flex
      py={{ base: 16, md: 20 }}
      px={{ base: 5, md: 20 }}
      justify="center"
      align="center"
    >
      <Stack
        spacing={{ base: 0, lg: 20 }}
        direction={{ base: "column", md: "row" }}
        align="center"
        maxW="1600px"
      >
        <Box maxW={{ base: "100%", lg: "50%" }}>
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
        </Box>
        <Box w="50%" h="100%">
          <Image
            src="/CreditCardAtm.png"
            alt="JASS ATM Hero"
            width={500}
            height={500}
            display={{ base: "none", lg: "block" }}
            float="right"
            mr={14}
            loading="eager"
            fetchPriority="high"
          />
        </Box>
      </Stack>
    </Flex>
  )
}

export default Hero
