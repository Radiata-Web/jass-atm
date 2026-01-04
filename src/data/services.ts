import { Service } from "@/components/service-card";
import { LocateFixedIcon, Receipt, RefreshCw, Wrench } from "lucide-react";

export const services: Service[] = [
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
