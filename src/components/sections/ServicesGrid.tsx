import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/data";

export function ServicesGrid() {
    return (
        <section id="services" className="py-20 bg-muted/50 scroll-mt-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Our Expertise</h2>
                    <p className="text-lg text-muted-foreground">
                        Comprehensive solutions tailored to your business needs, from strategic consulting to digital transformation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <Card key={service.slug} className="h-full hover:shadow-lg transition-all duration-300 border-none shadow-sm hover:-translate-y-1">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                    <service.icon className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-xl">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base mb-4">
                                    {service.description}
                                </CardDescription>
                                <ul className="space-y-2">
                                    {service.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-center text-sm text-foreground/80">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
