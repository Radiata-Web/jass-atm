import { ArrowRight, LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
};

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="flex flex-col bg-card p-4 gap-8 border transition-all duration-300 ease-out hover:shadow-lg">
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-semibold">{service.title}</h3>
        <p className="text-muted-foreground text-sm max-w-xl">
          {service.description}
        </p>
      </div>

      <div className="flex justify-between items-end gap-2">
        <Link to={service.href} className="flex text-sm gap-1 items-center">
          Learn More <ArrowRight size={16} />
        </Link>
        <service.icon size={28} className="text-muted-foreground" />
      </div>
    </div>
  );
}
