"use client";

import React from "react";
import {
    Bar,
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    Legend
} from "recharts";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ChartColumnStacked } from "lucide-react";

const data = [
    { date: "Oct 1", success: 100, failed: 20 },
    { date: "Oct 3", success: 120, failed: 30 },
    { date: "Oct 5", success: 150, failed: 40 },
    { date: "Oct 7", success: 180, failed: 50 },
    { date: "Oct 9", success: 200, failed: 60 },
    { date: "Oct 11", success: 160, failed: 40 },
    { date: "Oct 13", success: 140, failed: 30 },
    { date: "Oct 15", success: 190, failed: 50 },
    { date: "Oct 17", success: 220, failed: 70 },
    { date: "Oct 19", success: 170, failed: 40 },
    { date: "Oct 21", success: 130, failed: 30 },
    { date: "Oct 23", success: 210, failed: 60 },
    { date: "Oct 25", success: 240, failed: 80 },
    { date: "Oct 27", success: 200, failed: 50 },
    { date: "Oct 29", success: 180, failed: 40 },
    { date: "Oct 31", success: 250, failed: 90 },
];

export default function CreditUsageChart() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <ChartColumnStacked className="w-6 h-6 text-primary" />
                    Daily credits spent
                </CardTitle>
                <CardDescription>
                    Daily credit consumed in selected period
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={data}
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis
                                dataKey="date"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                minTickGap={32}
                            />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="success" stackId="a" fill="var(--color-success)" className="fill-green-500" name="Successfull Phases Credits" />
                            <Bar dataKey="failed" stackId="a" fill="var(--color-failed)" className="fill-red-500" name="Failed Phases Credits" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}
