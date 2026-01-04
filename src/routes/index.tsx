import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import ChooseUs from "@/components/sections/choose-us";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <ChooseUs />
    </div>
  );
}
