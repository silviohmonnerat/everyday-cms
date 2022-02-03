-- CreateTable
CREATE TABLE "Achive" (
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

    CONSTRAINT "Achive_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Achive_catalogueNumber_key" ON "Achive"("catalogueNumber");
