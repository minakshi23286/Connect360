import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { LeadForm } from "@/components/forms/LeadForm";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <ValueProposition />

      <section id="contact-form" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Grow Your Business?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Contact us today for a free consultation. Our team of experts is ready to assist you.
            </p>
          </div>
          <LeadForm />
        </div>
      </section>
    </>
  );
}
