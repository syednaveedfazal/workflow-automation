import { PutObjectCommand } from "@aws-sdk/client-s3";
import { randomUUID } from "crypto";
import { NextRequest } from "next/server";
import { s3 } from "@/lib/s3Client";
import prisma from "@/lib/prisma";
export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file") as File;
  const buffer = Buffer.from(await file.arrayBuffer());
  const fileName = `${randomUUID()}-${file.name}`;
  const command = new PutObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET,
    Key: fileName,
    Body: buffer,
    ContentType: file.type,
  });
  await s3.send(command);
  const url = `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;
  return new Response(url);
}

export async function GET() {
  const response = await prisma.documents.findMany();
  return new Response(JSON.stringify(response));
}
