import { Node } from "@xyflow/react";
import { TaskType } from "./task";
import { TaskParam } from "@/types/task";
export interface AppNodeData {
  type: TaskType;
  inputs: Record<string, string>;
  [key: string]: unknown;
}
export interface AppNode extends Node {
  data: AppNodeData;
}
export interface ParamProps {
  param: TaskParam;
  value:string,
  updateNodeParamValue:(newValue:string) => void
}
