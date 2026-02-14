import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServicesPage() {
    return (
        <div className="pt-24 min-h-screen">
            <div className="container mx-auto px-4 md:px-6 mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    We offer a comprehensive suite of corporate services designed to support businesses at every stage of their growth journey in the GCC.
                </p>
            </div>

            <ServicesGrid />

            <div className="bg-primary/5 py-16 mt-12">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Every business is unique. Contact us to discuss your specific requirements and how we can tailor our services to your goals.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/contact">Contact Us Today</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
