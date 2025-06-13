"use client";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { File } from "lucide-react";
import { CustomDialogHeader } from "@/components/custom/custom-dialog-header";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { addFileSchema, addFileType } from "@/formSchema/workflow";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { UploadDocument } from "@/actions/workflows/upload-document";
export function AddDocumentsDialog({ triggerText }: { triggerText?: string }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();
  const form = useForm<{
    name: string;
    file: File;
  }>({
    resolver: zodResolver(addFileSchema),
    defaultValues: {
      name: "",
      file: undefined as unknown as File,
    },
  });
  queryClient.invalidateQueries({ queryKey: ["allDocuments"] });

  const { mutate, isPending } = useMutation({
    mutationFn: ({ form }: { form: addFileType }) => UploadDocument({ form }),
    onSuccess: (data: string) => {
      toast.dismiss("uploaded-document");
      toast.success("uploaded document successfully", {
        id: "document-uploaded-success",
      });
      router.push(data);
    },
    onError: () => {
      toast.dismiss("uploaded-document");
      toast.error("Failed to upload document", { id: "create-upload-error" });
    },
  });

  const onSubmit = useCallback(
    (values: addFileType) => {
      // toast.loading("uploading...", { id: "upload-document" });
      mutate({ form: values });
    },
    [mutate]
  );

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        form.reset();
        setOpen(open);
      }}
    >
      <DialogTrigger asChild>
        <Button>{triggerText ?? "Add Documents"}</Button>
      </DialogTrigger>
      <DialogContent className="px-0">
        <CustomDialogHeader
          icon={File}
          title="Add Document"
          subtitleClassName="Add any image or documents to analyze"
        />
        <div className="p-6">
          <Form {...form}>
            <form
              className="space-y-8 w-full"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Document Name</FormLabel>
                    <FormControl>
                      <Input {...field} className="input" />
                    </FormControl>
                    <FormDescription>Name must be unique</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="file"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>File</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        className="input"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            field.onChange(file);
                          }
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? "Creating..." : "Proceed"}
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
