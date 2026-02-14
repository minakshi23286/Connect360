import { ShieldCheck, TrendingUp, Network, Award } from "lucide-react";

const valueProps = [
    {
        title: "GCC Market Expertise",
        description: "Deep understanding of the Gulf market dynamics, culture, and business opportunities.",
        icon: TrendingUp
    },
    {
        title: "Regulatory Compliance",
        description: "Navigating complex legal frameworks to ensure your business is fully compliant.",
        icon: ShieldCheck
    },
    {
        title: "End-to-End Support",
        description: "From initial setup to operational expansion, we support every stage of your journey.",
        icon: Award
    },
    {
        title: "Professional Network",
        description: "Access to an extensive network of partners, investors, and government entities.",
        icon: Network
    }
];

export function ValueProposition() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Why Choose Connect 360 Advisory?</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        We combine local expertise with global standards to deliver exceptional value to our clients.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {valueProps.map((prop, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg bg-card border shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                                <prop.icon className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{prop.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {prop.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
