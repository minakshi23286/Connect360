import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FileText, CheckCircle, Clock } from "lucide-react";

export default function DashboardPage() {
    // TODO: Fetch real stats from Supabase
    const stats = [
        { title: "Total Leads", value: "0", icon: Users, desc: "+0% from last month" },
        { title: "Active Inquiries", value: "0", icon: Clock, desc: "0 pending response" },
        { title: "Converted Deals", value: "0", icon: CheckCircle, desc: "0 completed this month" },
        { title: "Pending Reviews", value: "0", icon: FileText, desc: "0 items to review" },
    ];

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold">Dashboard</h1>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, i) => (
                    <Card key={i}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                {stat.title}
                            </CardTitle>
                            <stat.icon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <p className="text-xs text-muted-foreground">
                                {stat.desc}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Recent Leads</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground text-sm">No recent leads found.</p>
                    </CardContent>
                </Card>

                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground text-sm">No recent activity.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
