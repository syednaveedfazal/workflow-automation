import { TaskParamType, TaskType } from "@/types/task";
import { BrainIcon, LucideProps } from "lucide-react";

export const AnalyzeDocumentElement = {
  type: TaskType.ANALYZE_DOCUMENT_ELEMENT,
  label: "Extract Data With AI",
  icon: (props: LucideProps) => (
    <BrainIcon className="stroke-green-500" {...props} />
  ),
  isEntryPoint: false,
  inputs: [
    {
      name: "Content",
      type: TaskParamType.STRING,
      required: true,
    },
    {
      name: "Credentials",
      type: TaskParamType.CREDENTIAL,
      required: true,
    },
    {
      name: "Prompt",
      type: TaskParamType.STRING,
      required: true,
    },
  ],
  outputs: [
    {
      name: "Extracted Data",
      type: TaskParamType.STRING,
    },
  ],
} as const;
