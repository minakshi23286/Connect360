"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral text-neutral-foreground pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-white">Connect 360 Advisory</h3>
                        <p className="text-gray-400 mb-6 max-w-sm">
                            Your trusted partner for business setup, commercial brokerage, and corporate services in the GCC.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 text-gray-400">
                                <MapPin className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                                <span>BC-888898, 26th Floor, Amber Gem Tower, Ajman, UAE</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400">
                                <Mail className="h-5 w-5 shrink-0 text-primary" />
                                <a href="mailto:shrimalveminakshi@gmail.com" className="hover:text-white transition-colors">
                                    shrimalveminakshi@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400">
                                <Phone className="h-5 w-5 shrink-0 text-primary" />
                                <span>+971 54 389 5382</span> {/* Using mock/placeholder if not provided, wait, it was provided in contact section */}
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            {[
                                { name: "About Us", href: "/about" },
                                { name: "Our Services", href: "/services" },
                                { name: "Industries", href: "/industries" },
                                { name: "Contact Us", href: "/contact" },
                                { name: "Resources", href: "/resources" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-400 hover:text-primary transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
                        <ul className="space-y-2">
                            {[
                                { name: "Commercial Brokerage", href: "/services/commercial-brokerage" },
                                { name: "Market Entry Advisory", href: "/services/market-entry" },
                                { name: "HR Consultancy", href: "/services/hr-consultancy" },
                                { name: "Management Ops", href: "/services/management-consultancy" },
                                { name: "IT Consulting", href: "/services/it-consulting" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-400 hover:text-primary transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal & Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
                        <ul className="space-y-2 mb-6">
                            <li>
                                <Link href="/privacy-policy" className="text-gray-400 hover:text-primary transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-gray-400 hover:text-primary transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                        <h3 className="text-lg font-semibold mb-4 text-white">Connect With Us</h3>
                        <div className="flex gap-4">
                            <a href="#" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-primary transition-colors">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-primary transition-colors">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
                    <p>&copy; {currentYear} Connect 360 Advisory FZE LLC. All rights reserved.</p>
                    <div className="flex gap-4">
                        <span>License No: 262555389888</span>
                        <span>|</span>
                        <span>TRN: 105217978300001</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
