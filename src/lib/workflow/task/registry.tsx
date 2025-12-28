import { AnalyzeDocumentElement } from "./analyze-document-element";
import { ExtractTextFromElementTask } from "./extract-text-from-element";
import { LaunchBrowserTask } from "./launch-browser";
import { PageToHtml } from "./page-to-html";
import { FillInputTask } from "./fill-input";
import { ClickElementTask } from "./click-element";
import { ScrollToElementTask } from "./scroll-to-element";
import { NavigateUrlTask } from "./navigate-url";
import { ReadPropertyFromJsonTask } from "./read-property-from-json";
import { AddPropertyToJsonTask } from "./add-property-to-json";
import { WaitForElementTask } from "./wait-for-element";
import { DeliverViaWebhookTask } from "./deliver-via-webhook";

export const TaskRegistry = {
  LAUNCH_BROWSER: LaunchBrowserTask,
  PAGE_TO_HTML: PageToHtml,
  EXTRACT_TEXT_FROM_ELEMENT: ExtractTextFromElementTask,
  ANALYZE_DOCUMENT_ELEMENT: AnalyzeDocumentElement,
  FILL_INPUT: FillInputTask,
  CLICK_ELEMENT: ClickElementTask,
  SCROLL_TO_ELEMENT: ScrollToElementTask,
  NAVIGATE_URL: NavigateUrlTask,
  READ_PROPERTY_FROM_JSON: ReadPropertyFromJsonTask,
  ADD_PROPERTY_TO_JSON: AddPropertyToJsonTask,
  WAIT_FOR_ELEMENT: WaitForElementTask,
  DELIVER_VIA_WEBHOOK: DeliverViaWebhookTask,
};
