import Hero from "@/components/Hero"
import Company from "@/components/Company"
import Services from "@/components/Services"
import Machines from "@/components/Machines"
import Contact from "@/components/Contact"
import Seo from "@/components/Seo"
import { HOME_SEO, LOCAL_BUSINESS_JSON_LD } from "@/lib/seo"

export default function HomePage() {
  return (
    <>
      <Seo
        title={HOME_SEO.title}
        description={HOME_SEO.description}
        canonical={HOME_SEO.canonical}
        jsonLd={LOCAL_BUSINESS_JSON_LD}
      />
      <main>
        <Hero />
        <Company />
        <Services />
        <Machines />
        <Contact />
      </main>
    </>
  )
}
