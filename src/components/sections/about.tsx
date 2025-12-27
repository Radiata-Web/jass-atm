import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import AboutStats from "./about-stats";

export default function About() {
  return (
    <section className="py-12">
      <div className="grid grid-cols-1 gap-12 max-w-[90%] xl:grid-cols-2 xl:max-w-[60%] mx-auto">
        <div className="space-y-8">
          <span className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">About Us</h2>
            <p className="text-muted-foreground">
              Jass ATM Sales & Service is a family‑owned ATM company based in
              Jacksonville, Florida, serving businesses throughout the Southeast
              with dependable placement, processing, cash refill, and repair
              services. With 20+ years of experience, Jass ATM focuses on
              responsive support, clear communication, and solutions tailored to
              your location’s traffic and customers.
            </p>
          </span>

          <Button variant="secondary">More About Us</Button>

          <Separator />

          <AboutStats />
        </div>
      </div>
    </section>
  );
}
