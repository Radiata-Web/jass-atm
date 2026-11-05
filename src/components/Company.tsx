import { Flex, Box, Button, SimpleGrid, Heading, Text, Image } from "@chakra-ui/react"

const Company = () => {
  return (
    <Flex
      py={{ base: 16, md: 20, lg: 28 }}
      px={{ base: 5, md: 20 }}
      id="company"
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="center"
      bg="gray.50"
    >
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 2, md: 20 }}
        maxWidth="1600px"
      >
        <Flex align="center" order={{ base: 2, md: 1 }}>
          <Box>
            <Heading as="h2" size="xl" mb={4}>
              Company
            </Heading>

            <Text color="gray.600" mb={12}>
              Jass ATM Sales & Service is a family-owned company based in
              Jacksonville, Florida focused on providing reliable and
              customer-forward services. With 20+ years of experience, we have
              grown into one of the largest ATM companies in the Southeast.
            </Text>

            <Button
              as="a"
              colorScheme="brand"
              variant="outline"
              size="lg"
              href="#contact"
              width={{ base: "100%", md: "auto" }}
            >
              Get in contact
            </Button>
          </Box>
        </Flex>

        <Image
          src="/atm-graffiti-wide.jpg"
          alt="Image: About JASS ATM"
          borderRadius="xl"
          height={250}
          width={1000}
          w="100%"
          h="auto"
          mb={{ base: 4, md: 0 }}
          order={{ base: 1, md: 2 }}
        />
      </SimpleGrid>
    </Flex>
  )
}

export default Company
