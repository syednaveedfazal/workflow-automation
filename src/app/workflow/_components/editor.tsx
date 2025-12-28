"use client";

import { Workflow } from "@prisma/client";
import React, { useState } from "react";
import { ReactFlowProvider } from "@xyflow/react";
import { FlowEditor } from "./flow-editor";
import { TopBar } from "./topbar/top-bar";
import { TaskMenu } from "./task-menu";
import RunViewer from "./run-viewer";

export const Editor = ({ workflow }: { workflow: Workflow }) => {
  const [activeTab, setActiveTab] = useState<"editor" | "runs">("editor");

  return (
    <ReactFlowProvider>
      <div className="flex flex-col h-full w-full overflow-hidden">
        <TopBar
          title={workflow.name}
          subtitle="Something interesting"
          workflowId={workflow.id}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <section className="flex h-full overflow-auto">
          {activeTab === "editor" && (
            <>
              <TaskMenu />
              <FlowEditor workflow={workflow} />
            </>
          )}
          {activeTab === "runs" && <RunViewer workflowId={workflow.id} />}
        </section>
      </div>
    </ReactFlowProvider>
  );
};
