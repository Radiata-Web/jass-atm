import { Image } from "@chakra-ui/next-js"
import { Container, Heading, Text } from "@chakra-ui/react"
import React from "react"

const Company = () => {
  return (
    <Container bg="gray.100" py={8} id="company">
      <Image
        alt="Image: About JASS ATM"
        borderRadius="xl"
        bg="gray.500"
        h={200}
        mb={8}
      />
      <Heading as="h2" size="xl" mb={4}>
        Who we are
      </Heading>
      <Text color="gray.600">
        Jass ATM Sales & Service is a family-owned company based in
        Jacksonville, Florida focused on providing reliable and customer-forward
        services. With 20+ years of experience, we have grown into one of the
        largest ATM companies in the Southeast.
      </Text>
    </Container>
  )
}

export default Company
