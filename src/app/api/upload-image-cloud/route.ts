import { DeleteObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";
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
function extractKeyFromUrl(url: string | null | undefined): string {
  if (!url) throw new Error("Document URL is missing");
  const urlObj = new URL(url);
  return decodeURIComponent(urlObj.pathname.slice(1));
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Missing document id" }, { status: 400 });
  }
  try {
    const document = await prisma.documents.findUnique({ where: { id } });

    if (!document) {
      return NextResponse.json(
        { error: "Document not found" },
        { status: 404 }
      );
    }

    const command = new DeleteObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET!,
      Key: extractKeyFromUrl(document.documentUrl),
    });

    await s3.send(command);
    await prisma.documents.delete({ where: { id } });

    return NextResponse.json({ message: "Document deleted successfully" });
  } catch (e) {
    console.error("Error deleting document:", e);
    return NextResponse.json(
      { error: "Failed to delete document" },
      { status: 500 }
    );
  }
}
