"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export function AllDocumentsToDisplay() {
  const { data, isLoading } = useQuery({
    queryKey: ["allDocuments"],
    queryFn: async () => {
      const res = await fetch("/api/upload-image-cloud", { method: "GET" });
      if (!res.ok) throw new Error("Failed");
      return res.json();
    },
    retry: 4,
  });

  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
      {isLoading && <p>Loading...</p>}
      {data &&
        data.map((item: { documentName: string; documentUrl: string }) => {
          return (
            <div key={item.documentName} className="flex flex-col gap-2">
              <Image
                src={item.documentUrl}
                alt={item.documentName}
                width={300}
                height={300}
              />
              <p className="text-primary">{item.documentName}</p>
            </div>
          );
        })}
    </div>
  );
}
