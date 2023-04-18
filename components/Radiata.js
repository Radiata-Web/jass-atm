import { Image, Link } from "@chakra-ui/next-js"
import { Text } from "@chakra-ui/react"

const Radiata = () => {
  return (
    <Link
      href="https://radiataweb.com"
      px={3}
      py={1}
      transition={"all 0.2s ease"}
      target="_blank"
      _hover={{
        filter: "invert(1) brightness(0.35)",
      }}
    >
      <Image
        src="/RW-Logo-Dark.svg"
        alt="Radiata Web Logo"
        height={42}
        width={42}
      />
    </Link>
  )
}

export default Radiata
