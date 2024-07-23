"use server"

import  prisma  from '@/lib/prisma';

export async function getInquiries() {
  return prisma.inquiry.findMany();
}
