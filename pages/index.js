import Head from "next/head"
import Hero from "@/components/Hero"
import Company from "@/components/Company"
import Services from "@/components/Services"
import Machines from "@/components/Machines"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <>
      <Head>
        <title>Jass ATM - JAX</title>
        <meta
          name="description"
          content="Jass ATM Sales & Service is a family-owned company based in
              Jacksonville, Florida focused on providing reliable and
              customer-forward services."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

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
