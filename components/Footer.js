import { Flex, Box, Text, Tag, TagLabel, Stack } from "@chakra-ui/react"

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <Flex
      bg="brand.500"
      h={20}
      align="center"
      justify="center"
      fontFamily="Inter"
    >
      <Text color="white">
        &copy; {year} Jass ATM, Inc. | Site designed by Radiata Web.
      </Text>
    </Flex>
  )
}

export default Footer
