import { Flex, Heading, Box, SimpleGrid, Text, Button } from "@chakra-ui/react"
import { Image } from "@chakra-ui/next-js"

const Machines = () => {
  return (
    <Flex
      py={{ base: 16, md: 20 }}
      px={{ base: 5, md: 20 }}
      direction="column"
      align="center"
      justify="center"
      bg="gray.50"
      id="machines"
    >
      <Box>
        {/* Machines grid */}
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 2, md: 20 }}
          maxWidth="1600px"
        >
          {/* Text */}
          <Flex align="center">
            <Box order={{ base: 1, md: 2 }}>
              {/* About Heading */}
              <Heading
                as="h2"
                size="xl"
                mb={4}
                fontFamily="Inter"
              >
                ATM Machines
              </Heading>

              {/* Blurb */}
              <Text
                color="gray.600"
                mb={12}
              >
                Jass ATM Sales & Service is a family-owned company based in
                Jacksonville, Florida focused on providing reliable and
                customer-forward services. With 20+ years of experience, we have
                grown into one of the largest ATM companies in the Southeast.
              </Text>

              {/* MOBILE VIEW: ATM Logo Grid */}
              <SimpleGrid
                columns={{ base: 2, md: 2 }}
                spacing={{ base: 10, md: 20 }}
                my={10}
                mb={12}
                alignItems="center"
                justifyItems="center"
                display={{ base: "grid", md: "none" }}
              >
                {/* Image */}
                <Image
                  src="/genmega-logo.png"
                  alt="GenMega logo"
                  height={250}
                  width={1000}
                  w="80%"
                  h="auto"
                />
                <Image
                  src="/hyosung-logoc.svg"
                  alt="Hyosung logo"
                  height={250}
                  width={1000}
                  w="80%"
                  h="auto"
                  transform="translateY(10px)"
                />
              </SimpleGrid>

              {/* CTA Button */}
              <Button
                as="a"
                colorScheme="brand"
                variant="outline"
                size="lg"
                href="#contact"
                width={{ base: "100%", md: "auto" }}
              >
                View Machines
              </Button>
            </Box>
          </Flex>

          {/* DESKTOP VIEW: ATM logo grid*/}
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 10, md: 20 }}
            my={10}
            mb={12}
            alignItems="center"
            justifyItems="center"
            display={{ base: "none", md: "grid" }}
          >
            {/* Image */}
            <Image
              src="/genmega-logo.png"
              alt="GenMega logo"
              height={250}
              width={1000}
              w="70%"
              h="auto"
            />
            <Image
              src="/hyosung-logoc.svg"
              alt="Hyosung logo"
              height={250}
              width={1000}
              w="70%"
              h="auto"
              transform="translateY(10px)"
            />
          </SimpleGrid>
        </SimpleGrid>
      </Box>
    </Flex>
  )
}

export default Machines
