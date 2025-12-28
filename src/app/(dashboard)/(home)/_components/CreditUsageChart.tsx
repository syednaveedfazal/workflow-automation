"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartNoAxesColumn } from "lucide-react";
import React from "react";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
} from "recharts";

const data = Array.from({ length: 31 }, (_, i) => {
    const day = i + 1;
    return {
        name: `Oct ${day}`,
        success: Math.floor(Math.random() * 500) + 100, // Random values for successful credits
        failed: Math.floor(Math.random() * 50) + 10,   // Random values for failed credits
    };
});

export default function CreditUsageChart() {
    return (
        <Card className="h-full shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-col items-start pb-4 space-y-0">
                <CardTitle className="text-base font-bold text-foreground flex items-center gap-2">
                    <ChartNoAxesColumn className="w-5 h-5 text-green-500" />
                    Daily credits spent
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                    Daily credit consumed in selected period
                </p>
            </CardHeader>
            <CardContent>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 12, fill: "#6B7280" }}
                                tickMargin={10}
                            />
                            <Tooltip
                                cursor={{ fill: "transparent" }}
                                contentStyle={{
                                    backgroundColor: "#fff",
                                    borderRadius: "8px",
                                    border: "1px solid #e5e7eb",
                                    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                                }}
                            />
                            <Legend wrapperStyle={{ paddingTop: "20px" }} />
                            <Bar
                                dataKey="success"
                                name="Successful Phases Credits"
                                stackId="a"
                                fill="#10b981"
                                radius={[0, 0, 4, 4]}
                            />
                            <Bar
                                dataKey="failed"
                                name="Failed Phases Credits"
                                stackId="a"
                                fill="#15803d" // Darker green for contrast
                                radius={[4, 4, 0, 0]}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}
