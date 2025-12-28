"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LayersIcon } from "lucide-react";
import React from "react";
import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
} from "recharts";

// Generate dummy data for October (31 days)
const data = Array.from({ length: 31 }, (_, i) => {
    const day = i + 1;
    // Create a wave-like pattern with some randomness
    const success = Math.floor(Math.random() * 50) + 20 + Math.sin(i / 2) * 20;
    const failed = Math.floor(Math.random() * 10) + 5;
    return {
        name: `Oct ${day}`,
        success,
        failed,
    };
});

export default function ExecutionStatusChart() {
    return (
        <Card className="h-full shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-col items-start pb-4 space-y-0">
                <CardTitle className="text-base font-bold text-foreground flex items-center gap-2">
                    <LayersIcon className="w-5 h-5 text-muted-foreground" />
                    Workflow execution status
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                    Daily number of successful and failed workflow executions
                </p>
            </CardHeader>
            <CardContent className="pl-0">
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            width={500}
                            height={400}
                            data={data}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <defs>
                                <linearGradient id="colorSuccess" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorFailed" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#15803d" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#15803d" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 12, fill: "#6B7280" }}
                                tickMargin={10}
                            />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "#fff",
                                    borderRadius: "8px",
                                    border: "1px solid #e5e7eb",
                                    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                                }}
                            />
                            <Area
                                type="monotone"
                                dataKey="success"
                                stackId="1"
                                stroke="#10b981"
                                fill="url(#colorSuccess)"
                                strokeWidth={2}
                            />
                            <Area
                                type="monotone"
                                dataKey="failed"
                                stackId="1"
                                stroke="#15803d" // Dark green for failed/other
                                fill="url(#colorFailed)"
                                strokeWidth={2}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}
