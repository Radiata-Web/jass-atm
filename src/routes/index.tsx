import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
    </div>
  );
}
