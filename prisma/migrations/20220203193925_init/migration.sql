/*
  Warnings:

  - Added the required column `media` to the `archive` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "archive" ADD COLUMN     "media" TEXT NOT NULL;
