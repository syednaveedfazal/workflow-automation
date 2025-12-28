"use client";

import React from "react";
import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
} from "recharts";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Layers2 } from "lucide-react";

const data = [
    { date: "Oct 1", success: 10, failed: 2 },
    { date: "Oct 2", success: 25, failed: 5 },
    { date: "Oct 3", success: 30, failed: 5 },
    { date: "Oct 4", success: 5, failed: 2 },
    { date: "Oct 5", success: 15, failed: 8 },
    { date: "Oct 6", success: 20, failed: 5 },
    { date: "Oct 7", success: 40, failed: 10 },
    { date: "Oct 8", success: 35, failed: 8 },
    { date: "Oct 9", success: 30, failed: 5 },
    { date: "Oct 10", success: 45, failed: 12 },
    { date: "Oct 12", success: 20, failed: 4 },
    { date: "Oct 14", success: 15, failed: 3 },
    { date: "Oct 16", success: 25, failed: 6 },
    { date: "Oct 18", success: 30, failed: 8 },
    { date: "Oct 20", success: 40, failed: 10 },
    { date: "Oct 22", success: 35, failed: 8 },
    { date: "Oct 24", success: 20, failed: 4 },
    { date: "Oct 26", success: 45, failed: 12 },
    { date: "Oct 28", success: 15, failed: 3 },
    { date: "Oct 30", success: 50, failed: 15 },
];

export default function ExecutionStatusChart() {
    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Layers2 className="w-6 h-6 text-primary" />
                    Workflow execution status
                </CardTitle>
                <CardDescription>
                    Daily number of sorted and failed workflow executions
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={data}
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                        >
                            <defs>
                                <linearGradient id="colorSuccess" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorFailed" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis
                                dataKey="date"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                minTickGap={32}
                                tickFormatter={(value) => value}
                            />
                            <Tooltip />
                            <Area
                                type="monotone"
                                dataKey="success"
                                stroke="#10b981"
                                fillOpacity={1}
                                fill="url(#colorSuccess)"
                                stackId="1"
                            />
                            <Area
                                type="monotone"
                                dataKey="failed"
                                stroke="#ef4444"
                                fillOpacity={1}
                                fill="url(#colorFailed)"
                                stackId="1"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}
