import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/data";

export function ServicesGrid() {
    return (
        <section className="py-20 bg-muted/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Our Expertise</h2>
                    <p className="text-lg text-muted-foreground">
                        Comprehensive solutions tailored to your business needs across diverse industries in the GCC region.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {services.map((service) => (
                        <Link key={service.slug} href={`/services/${service.slug}`} className="group">
                            <Card className="h-full hover:shadow-lg transition-all duration-300 border-none shadow-sm hover:-translate-y-1">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                                        <service.icon className="h-6 w-6" />
                                    </div>
                                    <CardTitle className="text-xl">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base line-clamp-3">
                                        {service.description}
                                    </CardDescription>
                                    <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
