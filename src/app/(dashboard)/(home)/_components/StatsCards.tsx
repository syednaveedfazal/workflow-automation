"use client";

import React from "react";
import { CirclePlay, Waypoints, Coins } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function StatsCards() {
    return (
        <div className="grid gap-4 lg:grid-cols-3">
            <StatsCard
                title="Workflow executions"
                value="2,269"
                icon={CirclePlay}
                className="text-green-600"
            />
            <StatsCard
                title="Phase executions"
                value="6,913"
                icon={Waypoints}
                className="text-blue-600"
            />
            <StatsCard
                title="Credits consumed"
                value="10,448"
                icon={Coins}
                className="text-yellow-600"
            />
        </div>
    );
}

function StatsCard({
    title,
    value,
    icon: Icon,
    className,
}: {
    title: string;
    value: string;
    icon: React.ElementType;
    className?: string;
}) {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                    {title}
                </CardTitle>
                <Icon className={`h-4 w-4 ${className}`} />
            </CardHeader>
            <CardContent>
                <div className={`text-2xl font-bold ${className}`}>{value}</div>
            </CardContent>
        </Card>
    );
}
