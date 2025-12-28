"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface NavigationTabsProps {
    activeTab: "editor" | "runs";
    setActiveTab: (tab: "editor" | "runs") => void;
}

export default function NavigationTabs({
    activeTab,
    setActiveTab,
}: NavigationTabsProps) {
    return (
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "editor" | "runs")} className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="editor">Editor</TabsTrigger>
                <TabsTrigger value="runs">Runs</TabsTrigger>
            </TabsList>
        </Tabs>
    );
}
