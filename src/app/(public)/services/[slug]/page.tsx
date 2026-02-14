import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { services } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/forms/LeadForm";

interface ServicePageProps {
    params: Promise<{
        slug: string;
    }>;
}

// Next.js 15+ needs await params? Since it's Next 14/15, verify. 
// Standard in Next 14 is params prop. Next 15 might require awaiting params.
// Assuming Next 14 behavior for now based on request "Next.js 14".
export function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    const Icon = service.icon;

    return (
        <div className="pt-24 min-h-screen pb-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-8">
                    <Button variant="ghost" size="sm" asChild className="pl-0 hover:pl-2 transition-all">
                        <Link href="/services">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 rounded-xl bg-primary/10 text-primary">
                                <Icon className="h-8 w-8" />
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold">{service.title}</h1>
                        </div>

                        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
                            <p className="text-xl leading-relaxed text-muted-foreground">
                                {service.description}
                            </p>
                            <div className="my-8 h-px bg-border" />
                            <h3 className="text-2xl font-semibold mb-4 text-foreground">Overview</h3>
                            <p>{service.fullDescription}</p>

                            <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Key Benefits</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                                {service.benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Sidebar / Form */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <div className="mb-6">
                                <h3 className="text-xl font-bold mb-2">Interested in this service?</h3>
                                <p className="text-muted-foreground text-sm">
                                    Fill out the form below and we'll get back to you with a tailored proposal.
                                </p>
                            </div>
                            {/* Reuse LeadForm but maybe pre-select service? LeadForm has internal state. 
                        Ideally pass defaultService prop. I'll stick to generic for now or updated LeadForm later.
                    */}
                            <LeadForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
