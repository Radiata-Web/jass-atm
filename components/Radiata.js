const { Box, Text } = require("@chakra-ui/react")

const Radiata = () => {
  return (
    <Box
      bgGradient={"linear(to-tr, gray.900, gray.500)"}
      px={3}
      py={1}
      borderRadius="md"
      borderWidth="1px"
      borderColor="gray.900"
    >
      <Text fontWeight="bold" color="white">
        RW
      </Text>
    </Box>
  )
}

export default Radiata
