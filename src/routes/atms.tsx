import { createFileRoute } from "@tanstack/react-router"
import { usePostHog } from "posthog-js/react"
import { logPostHogInfo } from "../lib/posthog-logger.js"
import {
  Flex,
  Box,
  Stack,
  Text,
  Heading,
  Image,
  SimpleGrid,
  Button,
} from "@chakra-ui/react"

export const Route = createFileRoute("/atms")({
  head: () => ({
    meta: [{ title: "ATMs - Jass ATM" }],
  }),
  component: Atms,
})

function Atms() {
  const posthog = usePostHog()

  const trackDocumentOpen = (atm, documentType) => {
    posthog?.capture("atm_document_opened", {
      atm_company: atm.company,
      atm_model: atm.model,
      document_type: documentType,
    })
    logPostHogInfo(posthog, "atm document opened", {
      event: "atm_document_opened",
      atm_company: atm.company,
      atm_model: atm.model,
      document_type: documentType,
    })
  }

  return (
    <Flex
      py={{ base: 16, md: 20 }}
      px={{ base: 4, md: 20 }}
      height={{ base: "calc(100% + 2rem", md: "calc(100% + 4rem)" }}
      direction="column"
      align="center"
      justify="center"
      id="services"
      maxWidth="1600px"
    >
      <Box>
        <Heading
          as="h2"
          size="xl"
          mb={4}
          fontFamily="Inter"
          textAlign="left"
        >
          See our ATMs
        </Heading>

        <SimpleGrid
          columns={[1, 2, 2, 4]}
          fontFamily="Inter"
          maxW="1600px"
          mt={8}
          spacing={{ base: 4, md: 8 }}
        >
          {ATMS.map((atm) => (
            <Box
              key={atm.model}
              px={8}
              py={8}
              borderRadius="xl"
              maxW="100%"
              shadow={{ base: "md", md: "xl" }}
              borderWidth="1px"
              borderColor="gray.100"
              align="center"
            >
              <Image
                src={atm.image}
                alt={`${atm.model}`}
                height={300}
                width={10}
                maxH="300px"
                w="auto"
                mb={6}
              />

              <Flex direction="column" mt={4} align="center">
                <Image
                  src={atm.company_image}
                  alt={`${atm.company}`}
                  height={5}
                  width={20}
                />
                <Heading as="h2" mb={6}>
                  {atm.model}
                </Heading>
              </Flex>

              <Stack direction={{ base: "column", xl: "row" }}>
                <Button
                  as="a"
                  href={atm.brochure}
                  target="_blank"
                  onClick={() => trackDocumentOpen(atm, "brochure")}
                  rel="noreferrer"
                  colorScheme="brand"
                  rightIcon={
                    <Image
                      src="/icons/external-link.svg"
                      alt="link icon"
                      height={5}
                      width={5}
                    />
                  }
                >
                  Brochure
                </Button>

                {atm.manual == null && (
                  <Button
                    colorScheme="blackAlpha"
                    bg="gray.700"
                    rightIcon={
                      <Image
                        src="/icons/external-link.svg"
                        alt="link icon"
                        height={5}
                        width={5}
                      />
                    }
                    isDisabled
                  >
                    Manual
                  </Button>
                )}

                {atm.manual != null && (
                  <Button
                    as="a"
                    colorScheme="blackAlpha"
                    bg="gray.700"
                    href={atm.manual}
                    target="_blank"
                    onClick={() => trackDocumentOpen(atm, "manual")}
                    rel="noreferrer"
                    rightIcon={
                      <Image
                        src="/icons/external-link.svg"
                        alt="link icon"
                        height={5}
                        width={5}
                      />
                    }
                  >
                    Manual
                  </Button>
                )}
              </Stack>
            </Box>
          ))}
        </SimpleGrid>

        <Box align="center" mt={20} color="gray.500">
          <Text>
            Brochures and manuals downloaded directly from the
            manufacturer&apos;s website. Jass ATM assumes no responsibility for
            the content or security of these documents.
          </Text>
        </Box>
      </Box>
    </Flex>
  )
}

const ATMS = [
  {
    company: "Genmega",
    company_image: "/genmega-logo.png",
    model: "G2500",
    image: "/atms/gm-g2500.png",
    brochure: "http://www.genmega.com/brochures/Genmega_G2500_Brochure.pdf",
    manual: "http://ftp.genmega.com/Manuals/Genmega_G2500_Manual_2012.pdf",
  },
  {
    company: "Genmega",
    company_image: "/genmega-logo.png",
    model: "Onyx",
    image: "/atms/gm-onyx.png",
    brochure: "http://www.genmega.com/brochures/Genmega_Onyx_Brochure.pdf",
    manual: "http://ftp.genmega.com/Manuals/Genmega_G2500_Manual_2012.pdf",
  },
  {
    company: "Hyosung",
    company_image: "/hyosung-logoc.svg",
    model: "Halo II",
    image: "/atms/hs-halo2.png",
    brochure: "https://hyosung.hflip.co/4a3098de2c.html",
    manual: null,
  },
  {
    company: "Hyosung",
    company_image: "/hyosung-logoc.svg",
    model: "Force",
    image: "/atms/hs-force.png",
    brochure: "https://hyosung.hflip.co/658bd1901c.html",
    manual: null,
  },
]
