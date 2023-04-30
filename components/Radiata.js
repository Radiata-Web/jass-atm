import { Image, Link } from "@chakra-ui/next-js"
import { Text, Stack } from "@chakra-ui/react"

const Radiata = () => {
  return (
    <Link
      href="https://radiataweb.com"
      transition={"all 0.2s ease"}
      target="_blank"
      _hover={{
        textDecoration: "none",
      }}
    >
      <Stack
        direction="row"
        align="center"
        borderRadius="lg"
        borderColor="gray.100"
        borderWidth="1px"
        shadow="sm"
        px={5}
        py={3}
        transition={"all 0.2s ease"}
        _hover={{
          shadow: "md",
          borderColor: "gray.200",
        }}
      >
        <Text fontSize="sm" color="gray.600">
          Developed by
        </Text>
        <Image
          src="/RW-Logo-Dark.svg"
          alt="Radiata Web Logo"
          height={6}
          width={50}
          w="auto"
        />
      </Stack>
    </Link>
  )
}

export default Radiata
