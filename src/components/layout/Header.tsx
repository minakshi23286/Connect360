"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Industries", href: "/industries" },
    { name: "Contact", href: "/contact" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md shadow-sm py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <span className={cn("text-2xl font-bold tracking-tight", isScrolled ? "text-primary" : "text-white")}>
                        Connect 360
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                pathname === item.href
                                    ? "text-primary"
                                    : isScrolled ? "text-foreground/80" : "text-white/90 hover:text-white"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className={cn(isScrolled ? "text-foreground" : "text-white hover:text-white hover:bg-white/10")}>
                                <Globe className="h-5 w-5" />
                                <span className="sr-only">Switch Language</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>English</DropdownMenuItem>
                            <DropdownMenuItem>العربية</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Button
                        variant={isScrolled ? "default" : "secondary"}
                        className={cn(!isScrolled && "bg-white text-primary hover:bg-white/90")}
                        asChild
                    >
                        <Link href="/contact">Get Started</Link>
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={cn("md:hidden p-2", isScrolled ? "text-foreground" : "text-white")}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b p-4 shadow-lg animate-in slide-in-from-top-5">
                    <nav className="flex flex-col gap-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "text-base font-medium p-2 rounded-md hover:bg-muted",
                                    pathname === item.href ? "text-primary bg-muted" : "text-foreground"
                                )}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="border-t pt-4 mt-2 flex flex-col gap-4">
                            <Button variant="outline" className="w-full justify-start gap-2">
                                <Globe className="h-4 w-4" /> English / العربية
                            </Button>
                            <Button className="w-full" asChild>
                                <Link href="/contact">Get Started</Link>
                            </Button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
