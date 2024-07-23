"use server"
import { PrismaClient, Inquiry } from '@prisma/client';

const prisma = new PrismaClient();

// Function to update an inquiry
export async function updateInquiry(inquiryId: number, updatedData: Partial<Inquiry>) {
  return await prisma.inquiry.update({
    where: { id: inquiryId },
    data: updatedData,
  });
}

// Function to submit updated inquiry to the `Submitted` table
export async function submitToNewTable(inquiryId: number) {
  // Fetch the updated inquiry
  const updatedInquiry = await prisma.inquiry.findUnique({
    where: { id: inquiryId },
  });

  if (!updatedInquiry) {
    throw new Error('Inquiry not found');
  }

  return await prisma.submitted.create({
    data: {
      subject: updatedInquiry.subject,
      content: updatedInquiry.content,
      // Assuming `requestImageUrl` and `requestImagePublicId` are fields in the `Inquiry` model
      requestImageUrl: updatedInquiry.requestImageUrl,
      requestImagePublicId: updatedInquiry.requestImagePublicId,
    },
  });
}

// Function to delete an inquiry
export async function deleteInquiry(inquiryId: number) {
  return await prisma.inquiry.delete({
    where: { id: inquiryId },
  });
}

// Function to get all inquiries
export async function getInquiries() {
  return await prisma.inquiry.findMany();
}
