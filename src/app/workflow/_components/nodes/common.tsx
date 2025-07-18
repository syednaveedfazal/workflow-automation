import { TaskParamType } from "@/types/task";
export const ColorForHandle: Record<TaskParamType, string> = {
  [TaskParamType.BROWSER_INSTANCE]: "!bg-sky-400",
  [TaskParamType.DOCUMENT]: "!bg-sky-400",
  STRING: "!bg-amber-400",
};
