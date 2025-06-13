export enum TaskType {
  LAUNCH_BROWSER = "LAUNCH_BROWSER",
  PAGE_TO_HTML = "PAGE_TO_HTML",
  EXTRACT_TEXT_FROM_ELEMENT = "EXTRACT_TEXT_FROM_ELEMENT",
  ANALYZE_DOCUMENT_ELEMENT = "ANALYZE_DOCUMENT_ELEMENT",
}
export enum TaskParamType {
  STRING = "STRING",
  BROWSER_INSTANCE = "BROWSER_INSTANCE",
  DOCUMENT = "DOCUMENT",
}

export interface TaskParam {
  name: string;
  type: TaskParamType;
  helperText?: string;
  required?: boolean;
  hideHandle?: boolean;
  [key: string]: unknown;
}
