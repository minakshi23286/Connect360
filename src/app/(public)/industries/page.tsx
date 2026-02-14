import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Building2, Stethoscope, ShoppingBag, Laptop, Plane, Briefcase } from "lucide-react";

const industries = [
    {
        title: "Real Estate & Construction",
        description: "Supporting developers, contractors, and real estate agencies with licensing and regulatory compliance.",
        icon: Building2
    },
    {
        title: "Healthcare & Pharmaceuticals",
        description: "Advisory for clinics, pharmacies, and medical equipment suppliers navigating health authority regulations.",
        icon: Stethoscope
    },
    {
        title: "Retail & Consumer Goods",
        description: "End-to-end solutions for retail setups, from trade licensing to product registration.",
        icon: ShoppingBag
    },
    {
        title: "Technology & IT",
        description: "Helping tech startups and software houses establish their presence in Dubai's thriving tech ecosystem.",
        icon: Laptop
    },
    {
        title: "Logistics & Transport",
        description: "Licensing and consultation for freight forwarding, transport, and warehousing businesses.",
        icon: Plane
    },
    {
        title: "Professional Services",
        description: "Business setup for consultancies, law firms, and other professional entities.",
        icon: Briefcase
    }
];

export default function IndustriesPage() {
    return (
        <div className="pt-24 min-h-screen">
            <section className="pb-16 pt-8">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Industries We Serve</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Tailored expertise across key economic sectors in the GCC.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industries.map((ind, i) => (
                            <div key={i} className="bg-card p-8 rounded-xl border hover:shadow-lg transition-all group">
                                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <ind.icon className="h-7 w-7" />
                                </div>
                                <h3 className="text-2xl font-semibold mb-3">{ind.title}</h3>
                                <p className="text-muted-foreground">
                                    {ind.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 text-center">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold mb-6">Don't See Your Industry?</h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        We work with businesses across a wide range of sectors. Contact us to discuss your specific needs.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/contact">Contact Our Experts</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
