import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="pt-24 min-h-screen">
            {/* Hero Section */}
            <section className="pb-16 pt-8 bg-background">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">About Connect 360 Advisory</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Your strategic partner for corporate excellence and business growth in the UAE and GCC region.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-card p-8 rounded-xl shadow-sm border">
                            <h2 className="text-2xl font-bold mb-4 text-primary">Our Mission</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                To empower businesses with comprehensive, tailored corporate solutions that facilitate seamless market entry, operational efficiency, and sustainable growth. We strive to be the bridge that connects our clients to opportunities in the dynamic GCC market.
                            </p>
                        </div>
                        <div className="bg-card p-8 rounded-xl shadow-sm border">
                            <h2 className="text-2xl font-bold mb-4 text-primary">Our Vision</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                To be the premier corporate services advisory firm in the region, recognized for our integrity, expertise, and unwavering commitment to client success. We aim to set the standard for professional consulting services.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-16">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Integrity", desc: "We conduct our business with the highest ethical standards, ensuring transparency and trust in all our dealings." },
                            { title: "Excellence", desc: "We are committed to delivering superior results through continuous improvement and professional expertise." },
                            { title: "Partnership", desc: "We believe in building long-term relationships, working collaboratively with our clients as true partners in their success." }
                        ].map((value, i) => (
                            <div key={i} className="text-center p-6">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle2 className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                                <p className="text-muted-foreground">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership / Company Info */}
            <section className="py-16 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-3xl font-bold mb-8">Leadership</h2>
                    <div className="max-w-2xl mx-auto bg-white/10 p-8 rounded-xl backdrop-blur-sm">
                        <h3 className="text-2xl font-bold mb-2">Minakshi Shrimalve</h3>
                        <p className="text-primary-foreground/80 mb-6">Manager</p>
                        <div className="border-t border-white/20 pt-6 mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-left text-sm">
                            <div>
                                <span className="opacity-70 block">Legal Entity</span>
                                <span className="font-semibold">Connect 360 Advisory FZE LLC</span>
                            </div>
                            <div>
                                <span className="opacity-70 block">Location</span>
                                <span className="font-semibold">Ajman, UAE</span>
                            </div>
                            <div>
                                <span className="opacity-70 block">License Number</span>
                                <span className="font-semibold">262555389888</span>
                            </div>
                            <div>
                                <span className="opacity-70 block">TRN</span>
                                <span className="font-semibold">105217978300001</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 text-center">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold mb-6">Join Our Success Story</h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Discover how Connect 360 Advisory can help your business thrive.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/contact">Get in Touch</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
