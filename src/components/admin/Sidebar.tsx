"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Users, Settings, LogOut, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase";
import { useRouter } from "next/navigation";

const navigation = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Leads", href: "/admin/leads", icon: Users },
    //   { name: "Content", href: "/admin/content", icon: FileText },
    { name: "Settings", href: "/admin/settings", icon: Settings },
];

export function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const supabase = createClient();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push("/login");
    };

    return (
        <div className="flex flex-col h-full bg-slate-900 text-white w-64 fixed left-0 top-0 border-r border-slate-800">
            <div className="p-6 border-b border-slate-800">
                <h1 className="text-xl font-bold tracking-tight">Connect 360</h1>
                <p className="text-xs text-slate-400">Admin Panel</p>
            </div>

            <nav className="flex-1 p-4 space-y-2">
                {navigation.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-md transition-colors text-sm font-medium",
                                isActive
                                    ? "bg-primary text-primary-foreground"
                                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                            )}
                        >
                            <item.icon className="h-5 w-5" />
                            {item.name}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-slate-800">
                <Button
                    variant="ghost"
                    className="w-full justify-start gap-3 text-slate-300 hover:bg-red-900/20 hover:text-red-400"
                    onClick={handleLogout}
                >
                    <LogOut className="h-5 w-5" />
                    Sign Out
                </Button>
            </div>
        </div>
    );
}
