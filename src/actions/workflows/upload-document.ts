"use server";
import { addFileType, addFileSchema } from "@/formSchema/workflow";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { s3 } from "@/lib/s3Client";
import { PutObjectCommand } from "@aws-sdk/client-s3";
export async function UploadDocument({ form }: { form: addFileType }) {
  const { success, data } = addFileSchema.safeParse(form);
  if (!success) {
    throw new Error("Invalid form data");
  }
  const { userId } = await auth();
  if (!userId) {
    throw new Error("User not authenticated");
  }
  const buffer = await data.file.arrayBuffer();
  const fileBuffer = Buffer.from(buffer);
  const fileName = `${Date.now()}-${data.file.name}`;
  const s3Key = `uploads/${userId}/${fileName}`;
  await s3.send(
    new PutObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET!,
      Key: s3Key,
      Body: fileBuffer,
      ContentType: data.file.type,
    })
  );
  const result = prisma.documents.create({
    data: {
      userId,
      documentName: data.name,
      documentUrl: `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${s3Key}`,
    },
  });
  result.then((res) => console.log(res));
  return "/documents";
}
