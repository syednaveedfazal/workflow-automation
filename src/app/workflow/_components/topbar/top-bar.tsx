"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { SaveButton } from "./save-button";
import ExecuteButton from "./execute-button";
import NavigationTabs from "./navigation-tabs";

interface TopBarProps {
  title: string;
  subtitle?: string;
  workflowId: string;
  hideButtons?: boolean;
  isPublished?: boolean;
  activeTab: "editor" | "runs";
  setActiveTab: (tab: "editor" | "runs") => void;
}

export const TopBar = ({
  title,
  subtitle,
  workflowId,
  hideButtons = false,
  isPublished = false,
  activeTab,
  setActiveTab,
}: TopBarProps) => {
  const router = useRouter();
  return (
    <header
      className="flex p-2 border-p-2 border-separate justify-between w-full h-[60px]
  
  sticky top-0 bg-background z-10"
    >
      <div className="flex gap-1 flex-1">
        <Button variant={"ghost"} size={"icon"} onClick={() => router.back()}>
          <ChevronLeftIcon size={20} />
        </Button>
        <div>
          <p className="font-bold text-ellipsis truncate">{title}</p>
          {subtitle && (
            <p className="text-xs text-muted-foreground truncate text-ellipsis">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex gap-1 flex-1 justify-end">
        {!hideButtons && (
          <div className="flex gap-2">
            <ExecuteButton workflowId={workflowId} />
            {isPublished && <Button variant={"outline"}>Unpublish</Button>}
            {!isPublished && (
              <>
                <SaveButton workflowId={workflowId} />
                <Button>Publish</Button>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
};
