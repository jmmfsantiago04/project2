/*
  Warnings:

  - You are about to drop the `Submited` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Submited";

-- CreateTable
CREATE TABLE "Submitted" (
    "id" SERIAL NOT NULL,
    "subject" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "requestImageUrl" TEXT,
    "requestImagePublicId" TEXT,

    CONSTRAINT "Submitted_pkey" PRIMARY KEY ("id")
);
