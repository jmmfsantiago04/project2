"use server";
import prisma from '@/lib/prisma';

export async function submitInquiry(data: {
  fullName: string;
  phoneNumber: string;
  email: string;
  subject: string;
  content: string;
  requestImageUrl?: string | null; // Updated field for image URL
  requestImagePublicId?: string | null; // Updated field for image public ID
}) {
  try {
    console.log('Data received at server action:', data);  // Debug log

    const inquiry = await prisma.inquiry.create({
      data: {
        fullName: data.fullName,
        phoneNumber: data.phoneNumber,
        email: data.email,
        subject: data.subject,
        content: data.content,
        requestImageUrl: data.requestImageUrl, // Save image URL
        requestImagePublicId: data.requestImagePublicId, // Save image public ID
      },
    });

    return inquiry;
  } catch (error) {
    console.error('Error saving inquiry:', error);  // Debug log
    throw new Error('Error saving inquiry: ' + (error as Error).message);
  }
}
