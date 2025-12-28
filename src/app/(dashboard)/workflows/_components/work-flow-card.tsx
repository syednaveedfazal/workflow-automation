"use client";
import { Workflow } from "@prisma/client";
import { Card, CardContent } from "@/components/ui/card";
import { WorkflowStatus } from "@/types/workflow-types";
import { FileTextIcon, PlayIcon, ShuffleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { EditDropdown } from "@/components/custom/edit-option";
const statusColors: Record<WorkflowStatus, string> = {
  [WorkflowStatus.DRAFT]: "bg-yellow-400 text-yellow-700",
  [WorkflowStatus.PUBLISHED]: "bg-primary",
  [WorkflowStatus.ARCHIVED]: "bg-gray-400 text-gray-700",
};
export function WorkflowCard({ workflow }: { workflow: Workflow }) {
  const isDraft = workflow.status === WorkflowStatus.DRAFT;
  return (
    <Card
      className="border border-separate shadow-sm rounded-lg overflow-hidden
        hover:shadow-md dark:shadow-primary/30 group"
    >
      <CardContent className="p-4 flex items-center justify-between h-[100px]">
        <div className="flex items-center justify-end space-x-3">
          <div
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center",
              statusColors[workflow.status as WorkflowStatus]
            )}
          >
            {isDraft ? (
              <FileTextIcon className="h-5 w-5" />
            ) : (
              <PlayIcon className="h-5 w-5 text-white" />
            )}
          </div>
          <div>
            <h3 className="text-base font-bold text-muted-foreground flex items-center">
              <Link
                href={`/workflow/editor/${workflow.id}`}
                className="hover:underline flex items-center gap-2"
              >
                {workflow.name}
              </Link>
              {isDraft && (
                <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                  Draft
                </span>
              )}
            </h3>
            <div className="flex gap-2 text-sm text-muted-foreground items-center mt-1">
              <p>Schedule: Not set</p>
              <span>→</span>
              <p>Credits: 0</p>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {!isDraft && (
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <PlayIcon size={16} />
              Run
            </Button>
          )}
          <Link href={`/workflow/editor/${workflow.id}`}>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <ShuffleIcon size={16} />
              Edit
            </Button>
          </Link>
          <EditDropdown workflowId={workflow.id} />
        </div>
      </CardContent>
      <div className="bg-muted/50 px-4 py-2 flex justify-between items-center text-xs text-muted-foreground border-t">
        <div className="flex items-center gap-2">
          {!isDraft && (
            <>
              <span>Last run:</span>
              <span className="text-green-500 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Completed
              </span>
              <span>about 2 hours ago</span>
            </>
          )}
          {isDraft && <span>No runs yet</span>}
        </div>
        {!isDraft && <span>Next run at: --</span>}
      </div>
    </Card>
  );
}
