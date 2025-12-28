"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CirclePlay, Waypoints, Coins } from "lucide-react";
import React from "react";

export default function StatsCards() {
    return (
        <div className="grid gap-4 lg:grid-cols-3">
            <Card className="relative overflow-hidden hover:shadow-md transition-shadow">
                <CardHeader className="flex pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground z-10">
                        Workflow executions
                    </CardTitle>
                    <CirclePlay
                        className="absolute right-4 top-4 text-muted-foreground/10 w-24 h-24 z-0 stroke-1"
                    />
                </CardHeader>
                <CardContent className="z-10 bg-transparent">
                    <div className="text-4xl font-bold text-green-500">2,269</div>
                </CardContent>
            </Card>
            <Card className="relative overflow-hidden hover:shadow-md transition-shadow">
                <CardHeader className="flex pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground z-10">
                        Phase executions
                    </CardTitle>
                    <Waypoints
                        className="absolute right-4 top-4 text-muted-foreground/10 w-24 h-24 z-0 stroke-1"
                    />
                </CardHeader>
                <CardContent className="z-10 bg-transparent">
                    <div className="text-4xl font-bold text-green-500">6,913</div>
                </CardContent>
            </Card>
            <Card className="relative overflow-hidden hover:shadow-md transition-shadow">
                <CardHeader className="flex pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground z-10">
                        Credits consumed
                    </CardTitle>
                    <Coins
                        className="absolute right-4 top-4 text-muted-foreground/10 w-24 h-24 z-0 stroke-1"
                    />
                </CardHeader>
                <CardContent className="z-10">
                    <div className="text-4xl font-bold text-green-500">10,448</div>
                </CardContent>
            </Card>
        </div>
    );
}
