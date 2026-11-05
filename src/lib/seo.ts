export const SITE_URL = "https://www.jassatm.com"
export const SITE_NAME = "Jass ATM"
export const DEFAULT_OG_IMAGE = `${SITE_URL}/CreditCardAtm.png`

export const HOME_SEO = {
  title: "ATM Sales, Placement & Service in Jacksonville, FL | Jass ATM",
  description:
    "Family-owned ATM sales and service in Jacksonville. Free installation, processing, cash refills, and repair across the Southeast. Call (800) 676-6838.",
  canonical: `${SITE_URL}/`,
}

export const ATMS_SEO = {
  title: "Genmega & Hyosung ATM Machines | Brochures & Manuals | Jass ATM",
  description:
    "See Genmega G2500 & Onyx and Hyosung Halo II & Force ATMs placed by Jass ATM. Download manufacturer brochures and manuals.",
  canonical: `${SITE_URL}/atms`,
}

export const LOCAL_BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Jass ATM Sales & Service",
  url: SITE_URL,
  telephone: "+1-800-676-6838",
  email: "sales@jassatm.com",
  image: DEFAULT_OG_IMAGE,
  logo: `${SITE_URL}/jass-logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "8200 Cypress Plaza Drive, Suite 402",
    addressLocality: "Jacksonville",
    addressRegion: "FL",
    postalCode: "32256",
    addressCountry: "US",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Jacksonville",
    },
    {
      "@type": "AdministrativeArea",
      name: "Southeast United States",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+1-800-676-6838",
      contactType: "sales",
      email: "sales@jassatm.com",
      areaServed: "US",
      availableLanguage: "English",
    },
    {
      "@type": "ContactPoint",
      telephone: "+1-800-676-6838",
      contactType: "customer support",
      email: "support@jassatm.com",
      areaServed: "US",
      availableLanguage: "English",
    },
  ],
}
