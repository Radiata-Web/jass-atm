import { CircleStar, Receipt, Users } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export default function ChooseUs() {
  const reasons = [
    {
      title:
        "Family‑owned and based in Jacksonville, Florida, with more than two decades serving businesses across the Southeast.",
      icon: Users,
      url: "/about-us",
      cta: "Learn More About Us",
    },
    {
      title:
        "We offer comprehensive services—from placement and processing to vault cash and repair—under one roof.",
      icon: CircleStar,
      url: "/services",
      cta: "View Our Services",
    },
    {
      title:
        "Flexible programs with minimal processing fees and no long‑term contracts, designed to keep more surcharge revenue in your pocket.",
      icon: Receipt,
      url: "/contact",
      cta: "Get Started Today",
    },
  ];

  return (
    <section className="flex flex-col py-12 gap-4 max-w-[90%] xl:max-w-[60%] mx-auto">
      <h2 className="text-2xl font-semibold">Why Choose Jass ATM</h2>

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {reasons.map((reason, index) => (
          <li
            key={index}
            className="flex flex-col items-start gap-6 p-4 bg-primary/5 border border-primary/20"
          >
            <div className="flex items-center justify-center ">
              <reason.icon size={28} className="text-primary" />
            </div>

            <p>{reason.title}</p>

            <Link to={reason.url} className="flex text-sm gap-1 items-center">
              {reason.cta} <ArrowRight size={16} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
