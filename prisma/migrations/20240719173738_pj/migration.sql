/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Inquiry` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `Inquiry` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Inquiry" DROP COLUMN "createdAt",
DROP COLUMN "imageUrl",
ADD COLUMN     "requestImagePublicId" TEXT,
ADD COLUMN     "requestImageUrl" TEXT;
