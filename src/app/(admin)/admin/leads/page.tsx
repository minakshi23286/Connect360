"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Loader2, Calendar, Mail, Phone, MoreHorizontal } from "lucide-react";
import { format } from "date-fns";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function LeadsPage() {
    const [leads, setLeads] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const supabase = createClient();

    useEffect(() => {
        const fetchLeads = async () => {
            try {
                const { data, error } = await supabase
                    .from("leads")
                    .select("*")
                    .order("created_at", { ascending: false });

                if (error) throw error;
                setLeads(data || []);
            } catch (error) {
                console.error("Error fetching leads:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchLeads();
    }, [supabase]);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-64">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Leads</h1>
                <Button>Export Leads</Button>
            </div>

            <div className="border rounded-md">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Service</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Contact</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {leads.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={6} className="h-24 text-center">
                                    No leads found.
                                </TableCell>
                            </TableRow>
                        ) : (
                            leads.map((lead) => (
                                <TableRow key={lead.id}>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <Calendar className="h-4 w-4 text-muted-foreground" />
                                            {lead.created_at ? format(new Date(lead.created_at), "MMM d, yyyy") : "N/A"}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="font-medium">{lead.full_name}</div>
                                        <div className="text-sm text-muted-foreground">{lead.company_name}</div>
                                    </TableCell>
                                    <TableCell>{lead.service_interest}</TableCell>
                                    <TableCell>
                                        <Badge variant={lead.lead_status === 'new' ? 'default' : 'secondary'}>
                                            {lead.lead_status || 'New'}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <div className="text-sm space-y-1">
                                            <div className="flex items-center gap-2">
                                                <Mail className="h-3 w-3" /> {lead.email}
                                            </div>
                                            {lead.phone && (
                                                <div className="flex items-center gap-2">
                                                    <Phone className="h-3 w-3" /> {lead.phone}
                                                </div>
                                            )}
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" className="h-8 w-8 p-0">
                                                    <span className="sr-only">Open menu</span>
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                <DropdownMenuItem onClick={() => navigator.clipboard.writeText(lead.email)}>
                                                    Copy Email
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem>View Details</DropdownMenuItem>
                                                <DropdownMenuItem>Edit Status</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
