const { Box } = require("@chakra-ui/react")

const Radiata = () => {
  return (
    <Box
      bgGradient={"linear(to-tr, red, orange)"}
      px={3}
      py={1}
      borderRadius="md"
    >
      <p>Designed by RW</p>
    </Box>
  )
}

export default Radiata
