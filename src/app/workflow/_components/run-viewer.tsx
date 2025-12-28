"use client";

import React from "react";

export default function RunViewer({ workflowId }: { workflowId: string }) {
    console.log(workflowId);
    return (
        <div className="flex flex-col h-full w-full items-center justify-center">
            <div className="p-4 text-center">
                <h2 className="text-2xl font-bold">Workflow Runs</h2>
                <p className="text-muted-foreground">
                    Select a run to view details (Implementation needed)
                </p>
            </div>
        </div>
    );
}
