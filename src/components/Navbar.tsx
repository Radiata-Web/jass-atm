import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Popover,
  PopoverTrigger,
  useColorModeValue,
  useDisclosure,
  Heading,
  Link as ChakraLink,
  Image,
} from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import { Link as RouterLink } from "react-router-dom"
import type { ReactNode } from "react"

type NavItem = {
  label: string
  href?: string
  children?: NavItem[]
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#company" },
  { label: "Services", href: "/#services" },
  { label: "ATMs", href: "/atms" },
]

function AppLink({
  href,
  children,
  ...rest
}: {
  href: string
  children: ReactNode
} & React.ComponentProps<typeof ChakraLink>) {
  const isHash = href.includes("#")
  const isExternal = href.startsWith("http")

  if (isHash || isExternal) {
    return (
      <ChakraLink href={href} {...rest}>
        {children}
      </ChakraLink>
    )
  }

  return (
    <ChakraLink as={RouterLink} to={href} {...rest}>
      {children}
    </ChakraLink>
  )
}

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box
      as="header"
      textAlign="center"
      h="100%"
      borderBottom={1}
      borderStyle={"solid"}
      borderColor={useColorModeValue("gray.200", "gray.900")}
    >
      <Box
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4, xl: 2 }}
        textAlign="center"
        maxWidth="1600px"
        mx="auto"
      >
        <Flex align="center">
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Flex>
              <AppLink
                href="/"
                _hover={{
                  textDecoration: "none",
                }}
              >
                <Flex direction="row" align="center" gap={3}>
                  <Image
                    src="/jass-logo.svg"
                    alt="JASS ATM Logo"
                    height={9}
                    width={9}
                  />
                  <Heading
                    as="span"
                    size="md"
                    color="gray.800"
                    display={{ base: "none", md: "block" }}
                  >
                    Jass ATM
                  </Heading>
                </Flex>
              </AppLink>
            </Flex>

            <Flex
              as="nav"
              aria-label="Primary"
              display={{ base: "none", md: "flex" }}
              ml={10}
            >
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <Button
              as={"a"}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"brand.500"}
              href={"/#contact"}
              _hover={{
                bg: "brand.300",
              }}
            >
              Get Started
            </Button>
          </Stack>
        </Flex>
      </Box>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200")
  const linkHoverColor = useColorModeValue("gray.800", "white")

  return (
    <Stack direction={"row"} spacing={4} align="center">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <AppLink
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </AppLink>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const MobileNav = () => {
  return (
    <Stack
      as="nav"
      aria-label="Mobile"
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={AppLink}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <AppLink key={child.label} py={2} href={child.href ?? "#"}>
                {child.label}
              </AppLink>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}
