import { TaskParamType, TaskType } from "@/types/task";
import { ActivityIcon, LucideProps } from "lucide-react";

export const AnalyzeDocumentElement = {
  type: TaskType.ANALYZE_DOCUMENT_ELEMENT,
  label: "Analyze Document Element",
  icon: (props: LucideProps) => (
    <ActivityIcon className="stroke-pink-700" {...props} />
  ),
  isEntryPoint: false,
  inputs: [
    {
      name: "Prompt",
      type: TaskParamType.STRING,
      required: true,
    },
    {
      name: "Document",
      type: TaskParamType.DOCUMENT,
    },
  ],
  outputs: [
    {
      name: "Result",
      type: TaskParamType.STRING,
    },
  ],
};
