import { TaskParamType } from "@/types/task";
export const ColorForHandle: Record<TaskParamType, string> = {
  [TaskParamType.BROWSER_INSTANCE]: "!bg-sky-400",
  [TaskParamType.DOCUMENT]: "!bg-orange-400",
  [TaskParamType.STRING]: "!bg-amber-400",
  [TaskParamType.CREDENTIAL]: "!bg-green-400",
  [TaskParamType.SELECT]: "!bg-rose-400",
};
