"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { SaveButton } from "./save-button";
export const TopBar = ({
  title,
  subtitle,
  workflowId,
}: {
  title: string;
  subtitle?: string;
  workflowId: string;
}) => {
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
          <p className="front-bold text-ellipsis truncate">{title}</p>
          {subtitle && (
            <p className="text-xs text-muted-foreground truncate text-ellipsis">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      <div className="flex gap-1 flex-1 justify-end">
        <SaveButton workflowId={workflowId} />
      </div>
    </header>
  );
};
