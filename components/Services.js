import {
  Container,
  Heading,
  Text,
  Stack,
  StackItem,
  Card,
} from "@chakra-ui/react"
import React from "react"

const Services = () => {
  return (
    <Container py={8}>
      <Heading as="h2" size="xl" mb={4}>
        Services
      </Heading>
      <Stack spacing={2}>
        {SERVICES.map((service) => (
          <Card
            key={service.name}
            p={4}
            borderRadius={0}
            shadow="lg"
            borderColor="gray.50"
            borderWidth="1px"
          >
            <Heading as="h3" size="md" mb={2}>
              {service.name}
            </Heading>
            <Text>{service.description}</Text>
          </Card>
        ))}
      </Stack>
    </Container>
  )
}

const SERVICES = [
  {
    name: "Machine Placement",
    description: "Sales services",
  },
  {
    name: "Processing",
    description: "Service services",
  },
  {
    name: "Cash Refills",
    description: "Maintenance services",
  },
  {
    name: "Maintenance & Repair",
    description: "Consulting services",
  },
]

export default Services
