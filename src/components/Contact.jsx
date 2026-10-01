import {
  Flex,
  Box,
  SimpleGrid,
  Heading,
  Highlight,
  HStack,
  Text,
  Stack,
  Alert,
  AlertIcon,
  AlertDescription,
  Image,
  Link,
} from "@chakra-ui/react"
import { usePostHog } from "posthog-js/react"
import { logPostHogInfo } from "../lib/posthog-logger.js"
import ContactForm from "./ContactForm"

const Contact = () => {
  const posthog = usePostHog()

  const trackContactMethod = (contactMethod, contactPurpose) => {
    posthog?.capture("contact_method_selected", {
      contact_method: contactMethod,
      contact_purpose: contactPurpose,
    })
    logPostHogInfo(posthog, "contact method selected", {
      event: "contact_method_selected",
      contact_method: contactMethod,
      contact_purpose: contactPurpose,
    })
  }

  return (
    <Flex
      py={{ base: 16, md: 20, lg: 28 }}
      px={{ base: 5, md: 20 }}
      direction="column"
      align="center"
      justify="center"
      id="contact"
    >
      <Box>
        <SimpleGrid
          templateColumns={{ base: "1fr", md: "1fr 2fr" }}
          spacing={{ base: 2, md: 20 }}
          maxWidth="1600px"
          justify="center"
        >
          {/* Text & Business Information */}
          <Flex align="center">
            <Box>
              {/* Contact Heading */}
              <Heading as="h2" size="xl" mb={4}>
                Learn more about what we can do for{" "}
                <Highlight query="you" styles={{ color: "brand.500" }}>
                  you
                </Highlight>
                .
              </Heading>

              {/* Business Information */}
              <Stack spacing={{ base: 4, md: 8 }} mt={12}>
                {/* Phone */}
                <HStack spacing={4} align="center">
                  <Image
                    src="/icons/phone.svg"
                    alt="Phone Icon"
                    height={10}
                    width={10}
                  />

                  <Link
                    href="tel:8006766838"
                    onClick={() => trackContactMethod("phone", "sales")}
                    _hover={{ color: "brand.500" }}
                  >
                    <Text fontSize="lg">(800) 676-6838</Text>
                  </Link>
                </HStack>

                {/* Email */}
                <HStack spacing={4} align="center">
                  <Image
                    src="/icons/mail.svg"
                    alt="Email Icon"
                    height={10}
                    width={10}
                  />

                  <Link
                    href="mailto:sales@jassatm.com"
                    onClick={() => trackContactMethod("email", "sales")}
                    _hover={{ color: "brand.500" }}
                  >
                    <Text fontSize="lg">sales@jassatm.com</Text>
                  </Link>
                </HStack>

                {/* Address */}
                <HStack spacing={4} align="center">
                  <Image
                    src="/icons/pin.svg"
                    alt="Map Pin Icon"
                    height={10}
                    width={10}
                  />

                  <Box>
                    <Link
                      href="https://goo.gl/maps/ih3cZRXhZ4ayWH9GA"
                      target="_blank"
                      _hover={{ color: "brand.500" }}
                    >
                      <Text fontSize="lg">
                        8200 Cypress Plaza Drive, Suite 402
                      </Text>
                      <Text fontSize="lg">Jacksonville, FL 32256</Text>
                    </Link>
                  </Box>
                </HStack>
              </Stack>
            </Box>
          </Flex>

          {/* Contact Form */}
          <ContactForm />
        </SimpleGrid>

        <Alert status="info" mt={12} borderRadius={8}>
          <AlertIcon />
          <AlertDescription>
            Kindly direct any support requests to{" "}
            <strong>
              <Link
                href="mailto:support@jassatm.com"
                onClick={() => trackContactMethod("email", "support")}
              >
                support@jassatm.com
              </Link>
            </strong>{" "}
            or call our office at{" "}
            <strong>
              <Link
                href="tel:8006766838"
                onClick={() => trackContactMethod("phone", "support")}
              >
                (800) 676-6838
              </Link>
            </strong>
            .
          </AlertDescription>
        </Alert>
      </Box>
    </Flex>
  )
}

export default Contact
