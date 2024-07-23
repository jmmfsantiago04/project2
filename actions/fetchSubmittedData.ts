"use server"

import  prisma  from '@/lib/prisma';

export async function fetchSubmittedData() {
  try {
    const data = await prisma.submitted.findMany();
    return data;
  } catch (error) {
    console.error('Error fetching submitted data:', error);
    return [];
  }
}
