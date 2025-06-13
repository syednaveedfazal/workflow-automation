import { AddDocumentsDialog } from "../workflows/_components/add-documents-dialog";
import { AllDocumentsToDisplay } from "./_components/all-documents-to-display";

export default async function Documents() {
  return (
    <div className="flex flex-col flex-1 h-full gap-6">
      <div className="flex w-full justify-between p-2">
        <h1 className="text-3xl font-bold text-muted-foreground">
          All Uploaded Documents
        </h1>
        <AddDocumentsDialog triggerText="Add Documents" />
      </div>
      <AllDocumentsToDisplay />
    </div>
  );
}
