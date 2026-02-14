"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { createClient } from "@/lib/supabase";
import { Sidebar } from "@/components/admin/Sidebar";
import { Loader2 } from "lucide-react";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const pathname = usePathname();
    const supabase = createClient();

    useEffect(() => {
        const checkUser = async () => {
            // Allow access to login page without check
            if (pathname === "/login") {
                setIsLoading(false);
                return;
            }

            const { data: { session } } = await supabase.auth.getSession();

            if (!session) {
                router.push("/login");
            } else {
                setIsLoading(false);
            }
        };

        checkUser();
    }, [pathname, router, supabase.auth]);

    if (pathname === "/login") {
        return <>{children}</>;
    }

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-muted/20">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-muted/20">
            <Sidebar />
            <div className="pl-64">
                <header className="h-16 bg-background border-b flex items-center px-8 shadow-sm">
                    <h2 className="text-lg font-semibold">
                        {pathname.split("/").pop()?.charAt(0).toUpperCase() + pathname.split("/").pop()!.slice(1)}
                    </h2>
                </header>
                <main className="p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
