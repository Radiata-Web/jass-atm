import { Image } from "@chakra-ui/next-js"
import {
  Flex,
  Box,
  Text,
  Tag,
  TagLabel,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react"
import Radiata from "./Radiata"

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <Flex
      minHeight={200}
      align="space-between"
      justify="center"
      py={10}
      borderTop="1px"
      borderColor="gray.200"
    >
      <Stack align="center">
        <Flex align="center">
          <Image
            src="/jass-logo.png"
            alt="Jass ATM Logo"
            height={50}
            width={50}
            m={{ base: 4, md: 0 }}
          />
          <Text
            fontSize="2xl"
            fontWeight="bold"
          >
            Jass ATM
          </Text>
        </Flex>
        <Text>&copy; {year} Jass ATM, Inc.</Text>

        <Radiata />
      </Stack>
    </Flex>
  )
}

export default Footer
