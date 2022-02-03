/*
  Warnings:

  - Made the column `soundType` on table `archive` required. This step will fail if there are existing NULL values in that column.
  - Made the column `content` on table `archive` required. This step will fail if there are existing NULL values in that column.
  - Made the column `season` on table `archive` required. This step will fail if there are existing NULL values in that column.
  - Made the column `timeOfDay` on table `archive` required. This step will fail if there are existing NULL values in that column.
  - Made the column `typeOfLocation` on table `archive` required. This step will fail if there are existing NULL values in that column.
  - Made the column `location` on table `archive` required. This step will fail if there are existing NULL values in that column.
  - Made the column `recordist` on table `archive` required. This step will fail if there are existing NULL values in that column.
  - Made the column `artist` on table `archive` required. This step will fail if there are existing NULL values in that column.
  - Made the column `length` on table `archive` required. This step will fail if there are existing NULL values in that column.
  - Made the column `deviceRecorder` on table `archive` required. This step will fail if there are existing NULL values in that column.
  - Made the column `formatQuality` on table `archive` required. This step will fail if there are existing NULL values in that column.
  - Made the column `accessAndLicense` on table `archive` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tags` on table `archive` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "archive" ALTER COLUMN "soundType" SET NOT NULL,
ALTER COLUMN "content" SET NOT NULL,
ALTER COLUMN "season" SET NOT NULL,
ALTER COLUMN "timeOfDay" SET NOT NULL,
ALTER COLUMN "typeOfLocation" SET NOT NULL,
ALTER COLUMN "location" SET NOT NULL,
ALTER COLUMN "recordist" SET NOT NULL,
ALTER COLUMN "artist" SET NOT NULL,
ALTER COLUMN "length" SET NOT NULL,
ALTER COLUMN "deviceRecorder" SET NOT NULL,
ALTER COLUMN "formatQuality" SET NOT NULL,
ALTER COLUMN "accessAndLicense" SET NOT NULL,
ALTER COLUMN "tags" SET NOT NULL;
