/*
  Warnings:

  - Changed the type of `length` on the `archive` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "archive" DROP COLUMN "length",
ADD COLUMN     "length" BIGINT NOT NULL;
