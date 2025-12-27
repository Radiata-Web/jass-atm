import { Phone, Send } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="bg-[url('/img/downtown-jax.webp')] bg-center lg:bg-cover">
      <div className="flex flex-col gap-12 px-8 py-16 bg-linear-to-b from-black/50 to-black">
        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          <p className="text-5xl leading-tight font-semibold text-white">
            Reliable ATM Solutions for Businesses Across the Southeast.
          </p>
          <p className="text-xl text-gray-300">
            Jass ATM Sales & Service helps hotels, retailers, bars, and more
            boost revenue with fully managed ATM programs, fast repairs, and
            24/7 monitoring—without long‑term contracts or heavy fees.
          </p>
        </div>

        <div className="flex gap-4 mx-auto">
          <Button size="lg">
            <Send /> Request a Free ATM Consultation
          </Button>
          <Button variant="secondary" size="lg">
            <Phone />
            Call (800) 676-6838
          </Button>
        </div>
      </div>
    </section>
  );
}
