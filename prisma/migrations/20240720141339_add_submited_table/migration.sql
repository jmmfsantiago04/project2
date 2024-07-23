-- CreateTable
CREATE TABLE "Submited" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "requestImagePublicId" TEXT,
    "requestImageUrl" TEXT,

    CONSTRAINT "Submited_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Submited_email_key" ON "Submited"("email");
