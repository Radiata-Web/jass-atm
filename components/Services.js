import { Image } from "@chakra-ui/next-js"
import { Flex, Heading, Text, Stack, Box, SimpleGrid } from "@chakra-ui/react"

const Services = () => {
  return (
    <Flex
      py={{ base: 10, md: 20 }}
      px={{ base: 5, md: 20 }}
      height={{ base: "calc(100% + 2rem", md: "calc(100% + 4rem)" }}
      direction="column"
      align="center"
      justify="center"
      id="services"
    >
      <Box>
        <Heading
          as="h2"
          size="xl"
          mb={4}
          fontFamily="Inter"
          textAlign="left"
        >
          Services
        </Heading>

        {/* Services grid */}
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          fontFamily="Inter"
          maxW="1600px"
          spacing={{ base: 4, md: 8 }}
        >
          {SERVICES.map((service) => (
            <Box
              key={service.name}
              px={8}
              py={8}
              borderRadius="xl"
              maxW="100%"
              shadow="xl"
              borderWidth="1px"
              borderColor="gray.100"
            >
              <Stack
                mb={4}
                align="center"
                direction={{ base: "column", md: "row" }}
              >
                <Image
                  src={service.icon}
                  alt={`Icon: ${service.name}`}
                  height={10}
                  width={10}
                  mb={2}
                  mr={{ base: 0, md: 2 }}
                />
                <Heading
                  as="h3"
                  fontSize="26px"
                  mb={2}
                  fontFamily="Inter"
                >
                  {service.name}
                </Heading>
              </Stack>

              <Text textAlign={{ base: "center", sm: "left" }}>
                {service.description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Flex>
  )
}

const SERVICES = [
  {
    name: "Machine Placement",
    description:
      "Jass ATM works with you to determine the most suitable ATM for your location. Installation is quick, easy, and free.",
    icon: "/icons/location.svg",
  },
  {
    name: "Processing",
    description:
      "Recieve 24/7 online access to monitor your ATM, receive monthly statements, and more. Jass ATM charges little to no processing fees, and you aren't locked in to a contract.",
    icon: "/icons/processing.svg",
  },
  {
    name: "Cash Refills",
    description:
      "Ensure your ATM never runs out of funds. We will refill your ATM with cash as needed for a small fee depending on how many ATMs you have, and the quantity of cash you need.",
    icon: "/icons/money.svg",
  },
  {
    name: "Maintenance & Repair",
    description:
      "Broken ATMs can directly impact your business's profits. With Jass ATM, you can rest assured that your ATM will be repaired quickly and efficiently.",
    icon: "/icons/repair.svg",
  },
]

export default Services
