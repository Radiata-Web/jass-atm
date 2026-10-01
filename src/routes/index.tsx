import { createFileRoute } from "@tanstack/react-router"
import Hero from "@/components/Hero"
import Company from "@/components/Company"
import Services from "@/components/Services"
import Machines from "@/components/Machines"
import Contact from "@/components/Contact"

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ title: "Jass ATM - JAX" }],
  }),
  component: Home,
})

function Home() {
  return (
    <main>
      <Hero />
      <Company />
      <Services />
      <Machines />
      <Contact />
    </main>
  )
}
