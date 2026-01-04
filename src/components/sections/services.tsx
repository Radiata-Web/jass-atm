import ServiceCard from "../service-card";
import { services } from "@/data/services";

export default function Services() {
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
