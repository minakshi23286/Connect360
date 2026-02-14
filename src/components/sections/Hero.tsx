"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
            {/* Abstract Background Shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/2 -left-1/2 w-[1000px] h-[1000px] rounded-full bg-primary/20 blur-3xl opacity-30 animate-pulse" />
                <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-secondary/20 blur-3xl opacity-20" />
                <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] rounded-full bg-accent/20 blur-3xl opacity-20" />
            </div>

            <div className="container relative z-10 px-4 md:px-6 text-center">
                <div className="animate-in fade-in slide-in-from-bottom-5 duration-1000">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Your Trusted Partner for <br />
                        <span className="text-primary">Business Growth</span> in the GCC
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Providing comprehensive Commercial Brokerage, Corporate Services, and Market Entry Advisory to empower your business in the UAE and beyond.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="h-12 px-8 text-base" asChild>
                            <Link href="#contact-form">
                                Get Started <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-12 px-8 text-base border-white/20 text-white hover:bg-white/10" asChild>
                            <Link href="/services">
                                Explore Services
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
                    <div className="w-1 h-3 bg-white/50 rounded-full" />
                </div>
            </div>
        </section>
    );
}
