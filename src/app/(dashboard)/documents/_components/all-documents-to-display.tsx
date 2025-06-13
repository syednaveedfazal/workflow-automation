"use client";

import { Button } from "@/components/ui/button";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { toast } from "sonner";

export function AllDocumentsToDisplay() {
  const query = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["allDocuments"],
    queryFn: async () => {
      const res = await fetch("/api/upload-image-cloud", { method: "GET" });
      if (!res.ok) throw new Error("Failed");
      return res.json();
    },
    retry: 4,
  });
  const { mutate } = useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(`/api/upload-image-cloud?id=${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed");
      return res.json();
    },
    onError: () => {
      toast.error("Failed to delete document");
    },
    onSuccess: () => {
      toast.success("Document deleted successfully");
      query.invalidateQueries({ queryKey: ["allDocuments"] });
    },
  });
  const handleDelete = (id: string) => {
    mutate(id);
  };
  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
      {isLoading && <p>Loading...</p>}
      {data &&
        data.map(
          (item: { documentName: string; documentUrl: string; id: string }) => {
            return (
              <div key={item.documentName} className="flex flex-col gap-2">
                <Image
                  src={item.documentUrl}
                  alt={item.documentName}
                  width={300}
                  height={300}
                />
                <p className="text-primary">{item.documentName}</p>
                <Button
                  className="bg-red-500"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </Button>
              </div>
            );
          }
        )}
    </div>
  );
}
