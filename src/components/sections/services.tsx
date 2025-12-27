import { LocateFixedIcon, Receipt, RefreshCw, Wrench } from "lucide-react";
import ServiceCard from "../service-card";
import type { Service } from "../service-card";

export default function Services() {
  const services: Service[] = [
    {
      title: "Machine Placement",
      description:
        "Get the right ATM in the right spot, with zero upfront equipment cost for qualified locations and quick, professional installation.",
      icon: LocateFixedIcon,
      href: "/",
    },
    {
      title: "Processing & Monitoring",
      description:
        "Access real‑time and 24/7 online monitoring to track transactions, view activity, and review monthly statements from any device.",
      icon: RefreshCw,
      href: "/",
    },
    {
      title: "Cash Refills",
      description:
        "Ensure your ATM never runs out of money with on‑time cash refills tailored to your average withdrawal volume and seasonal spikes.",
      icon: Receipt,
      href: "/",
    },
    {
      title: "ATM Maintenance & Repair",
      description:
        "Downtime costs you revenue, so Jass ATM prioritizes fast diagnostics and repair to get your machine back in service quickly.",
      icon: Wrench,
      href: "/",
    },
  ];

  return (
    <section className="bg-secondary">
      <div className="flex flex-col py-12 gap-4 max-w-[90%] xl:max-w-[60%] mx-auto">
        <h2 className="text-2xl font-semibold">Featured Services</h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
