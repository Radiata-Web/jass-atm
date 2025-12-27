import { Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export default function Hero() {
  return (
    <section className="bg-[url('/img/downtown-jax.webp')] bg-center lg:bg-cover">
      {/* Background overlay */}
      <div className="bg-linear-to-bl from-black/50 to-black">
        {/* Content Container */}
        <div className="grid gap-12 grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col gap-12 max-w-[90%] xl:max-w-[60%] mx-auto py-12 md:py-24">
            {/* Content */}
            <div className="flex flex-col gap-4 max-w-4xl">
              <p className="text-5xl leading-tight font-semibold text-white">
                Reliable ATM Solutions for Businesses Across the Southeast.
              </p>
              <p className="text-xl text-gray-300 max-w-3xl">
                Jass ATM Sales & Service helps hotels, retailers, bars, and more
                boost revenue with fully managed ATM programs, fast repairs, and
                24/7 monitoring—without long‑term contracts or heavy fees.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-4 md:flex-row">
              {/* Email Button */}
              <Button size="lg" asChild>
                <Link to="/contact">
                  <Send /> Request a Free ATM Consultation
                </Link>
              </Button>

              {/* Phone Button */}
              <Button variant="outline" size="lg" asChild>
                <a href="tel:8006766838">
                  <Phone />
                  Call (800) 676-6838
                </a>
              </Button>
            </div>
          </div>

          {/* Illustration */}
          <div className="items-center justify-center hidden lg:flex">
            <img
              src="/figures/maintenance.svg"
              alt="Maintenance"
              width={500}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
