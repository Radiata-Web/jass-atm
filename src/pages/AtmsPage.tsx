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
import Seo from "@/components/Seo"
import { ATMS_SEO } from "@/lib/seo"

type Atm = {
  company: string
  company_image: string
  model: string
  image: string
  brochure: string
  manual: string | null
}

const ATMS: Atm[] = [
  {
    company: "Genmega",
    company_image: "/genmega-logo.png",
    model: "G2500",
    image: "/atms/gm-g2500.png",
    brochure: "https://www.genmega.com/brochures/Genmega_G2500_Brochure.pdf",
    manual: "https://ftp.genmega.com/Manuals/Genmega_G2500_Manual_2012.pdf",
  },
  {
    company: "Genmega",
    company_image: "/genmega-logo.png",
    model: "Onyx",
    image: "/atms/gm-onyx.png",
    brochure: "https://www.genmega.com/brochures/Genmega_Onyx_Brochure.pdf",
    // Manufacturer currently hosts the G2500 manual at this path for Onyx listing;
    // verify/replace when Genmega publishes a dedicated Onyx manual URL.
    manual: "https://ftp.genmega.com/Manuals/Genmega_G2500_Manual_2012.pdf",
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

export default function AtmsPage() {
  return (
    <>
      <Seo
        title={ATMS_SEO.title}
        description={ATMS_SEO.description}
        canonical={ATMS_SEO.canonical}
      />
      <main>
        <Flex
          py={{ base: 16, md: 20 }}
          px={{ base: 4, md: 20 }}
          height={{ base: "calc(100% + 2rem)", md: "calc(100% + 4rem)" }}
          direction="column"
          align="center"
          justify="center"
          id="services"
          maxWidth="1600px"
        >
          <Box>
            <Heading
              as="h1"
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
                  textAlign="center"
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
                      rel="noopener noreferrer"
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
                        rel="noopener noreferrer"
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

            <Box textAlign="center" mt={20} color="gray.500">
              <Text>
                Brochures and manuals downloaded directly from the
                manufacturer&apos;s website. Jass ATM assumes no responsibility
                for the content or security of these documents.
              </Text>
            </Box>
          </Box>
        </Flex>
      </main>
    </>
  )
}
