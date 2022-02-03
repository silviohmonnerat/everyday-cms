/*
  Warnings:

  - You are about to drop the `Achive` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Achive";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "archive" (
    "id" SERIAL NOT NULL,
    "catalogueNumber" TEXT NOT NULL,
    "soundType" TEXT,
    "title" TEXT NOT NULL,
    "content" VARCHAR(255),
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "season" TEXT,
    "timeOfDay" TEXT,
    "typeOfLocation" TEXT,
    "location" TEXT,
    "recordist" TEXT,
    "artist" TEXT,
    "length" TEXT,
    "deviceRecorder" TEXT,
    "formatQuality" TEXT,
    "accessAndLicense" TEXT,
    "tags" TEXT,
    "author_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "archive_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "archive_catalogueNumber_key" ON "archive"("catalogueNumber");
