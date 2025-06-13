"use server";

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function GetAllDocuments() {
  const { userId } = await auth();
  if (!userId) throw new Error("User not authenticated");

  const alldocuments = await prisma.documents.findMany({
    where: { userId: userId },
  });
  return alldocuments;
}
