"use client";

import { Button } from "@/components/ui/button";
import { PlayIcon } from "lucide-react";
import React from "react";

export default function ExecuteButton({ workflowId }: { workflowId: string }) {
    return (
        <Button
            variant={"outline"}
            className="flex items-center gap-2"
            onClick={() => {
                console.log("Execute workflow", workflowId);
                // TODO: Implement execution logic
            }}
        >
            <PlayIcon size={16} className="stroke-orange-400" />
            Execute
        </Button>
    );
}
