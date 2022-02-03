/*
  Warnings:

  - A unique constraint covering the columns `[catalogueNumber]` on the table `archive` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `catalogueNumber` on the `archive` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "archive" DROP COLUMN "catalogueNumber",
ADD COLUMN     "catalogueNumber" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "archive_catalogueNumber_key" ON "archive"("catalogueNumber");
