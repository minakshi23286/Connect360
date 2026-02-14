"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export function Hero() {
    return (
        <div className="relative isolate overflow-hidden bg-primary pt-14 lg:pt-0 min-h-[90vh] flex items-center">
            {/* Rich Gradient Background */}
            <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-foreground/20 via-primary to-primary/90 opacity-40"></div>
            <div className="absolute inset-0 -z-10 bg-[url('/grid-pattern.svg')] opacity-10"></div> {/* Optional grid if we had asset, simpler to just use CSS radial */}

            {/* Gold Glow accents */}
            <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] bg-secondary/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] bg-blue-500/20 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2"></div>


            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="text-left py-12 lg:py-0">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20 mb-6 backdrop-blur-sm">
                            <Star className="w-4 h-4 fill-secondary" />
                            <span className="text-sm font-medium uppercase tracking-wider">Premium Corporate Advisory</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                            Solving Real <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-amber-200">
                                Customer Problems
                            </span>
                        </h1>
                        <p className="mt-6 text-xl leading-8 text-blue-100 max-w-xl">
                            Connect 360 Advisory bridges the gap between complex challenges and practical solutions. From strategic management to AI & digital transformation.
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <Button size="xl" className="h-14 px-8 text-lg bg-secondary text-secondary-foreground hover:bg-amber-400 border-none shadow-lg shadow-secondary/20" asChild>
                                <Link href="#contact">Free Consultation</Link>
                            </Button>
                            <Button variant="outline" size="xl" className="h-14 px-8 text-lg border-white/20 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm" asChild>
                                <Link href="#services">
                                    Our Expertise <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>

                        {/* Stats or Trust Markers */}
                        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-8">
                            <div>
                                <div className="text-3xl font-bold text-white">500+</div>
                                <div className="text-sm text-blue-200">Clients Served</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white">98%</div>
                                <div className="text-sm text-blue-200">Success Rate</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white">24/7</div>
                                <div className="text-sm text-blue-200">Support</div>
                            </div>
                        </div>
                    </div>

                    {/* Abstract Visual / Glass Card */}
                    <div className="relative hidden lg:block">
                        <div className="relative rounded-2xl bg-white/5 border border-white/10 p-2 backdrop-blur-md shadow-2xl skew-y-3 transform hover:skew-y-0 transition-transform duration-700 ease-out">
                            <div className="rounded-xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 p-8 h-[600px] flex flex-col justify-center relative">
                                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
                                <div className="relative z-10 space-y-6">
                                    <div className="h-2 w-20 bg-secondary rounded-full" />
                                    <h3 className="text-3xl font-bold text-white">Strategic Growth</h3>
                                    <p className="text-slate-400">Unlock your business potential with data-driven insights and expert guidance.</p>
                                    <div className="grid grid-cols-2 gap-4 mt-8">
                                        <div className="h-32 bg-white/5 rounded-lg border border-white/10"></div>
                                        <div className="h-32 bg-white/5 rounded-lg border border-white/10"></div>
                                        <div className="h-32 bg-secondary/20 rounded-lg border border-secondary/30"></div>
                                        <div className="h-32 bg-white/5 rounded-lg border border-white/10"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
