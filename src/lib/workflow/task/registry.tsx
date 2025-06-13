import { AnalyzeDocumentElement } from "./analyze-document-element";
import { ExtractTextFromElementTask } from "./extract-text-from-element";
import { LaunchBrowserTask } from "./launch-browser";
import { PageToHtml } from "./page-to-html";
export const TaskRegistry = {
  LAUNCH_BROWSER: LaunchBrowserTask,
  PAGE_TO_HTML: PageToHtml,
  EXTRACT_TEXT_FROM_ELEMENT: ExtractTextFromElementTask,
  ANALYZE_DOCUMENT_ELEMENT: AnalyzeDocumentElement,
};
