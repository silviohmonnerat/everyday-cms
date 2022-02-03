/*
  Warnings:

  - You are about to alter the column `length` on the `archive` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - Made the column `soundType` on table `archive` required. This step will fail if there are existing NULL values in that column.
  - Made the column `title` on table `archive` required. This step will fail if there are existing NULL values in that column.
  - Made the column `content` on table `archive` required. This step will fail if there are existing NULL values in that column.
  - Made the column `date` on table `archive` required. This step will fail if there are existing NULL values in that column.
  - Made the column `season` on table `archive` required. This step will fail if there are existing NULL values in that column.
  - Made the column `timeOfDay` on table `archive` required. This step will fail if there are existing NULL values in that column.
  - Made the column `typeOfLocation` on table `archive` required. This step will fail if there are existing NULL values in that column.
  - Made the column `location` on table `archive` required. This step will fail if there are existing NULL values in that column.
  - Made the column `recordist` on table `archive` required. This step will fail if there are existing NULL values in that column.
  - Made the column `artist` on table `archive` required. This step will fail if there are existing NULL values in that column.
  - Made the column `deviceRecorder` on table `archive` required. This step will fail if there are existing NULL values in that column.
  - Made the column `formatQuality` on table `archive` required. This step will fail if there are existing NULL values in that column.
  - Made the column `accessAndLicense` on table `archive` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tags` on table `archive` required. This step will fail if there are existing NULL values in that column.
  - Made the column `length` on table `archive` required. This step will fail if there are existing NULL values in that column.
  - Made the column `media` on table `archive` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "archive" ALTER COLUMN "soundType" SET NOT NULL,
ALTER COLUMN "title" SET NOT NULL,
ALTER COLUMN "content" SET NOT NULL,
ALTER COLUMN "content" SET DATA TYPE TEXT,
ALTER COLUMN "date" SET NOT NULL,
ALTER COLUMN "season" SET NOT NULL,
ALTER COLUMN "timeOfDay" SET NOT NULL,
ALTER COLUMN "typeOfLocation" SET NOT NULL,
ALTER COLUMN "location" SET NOT NULL,
ALTER COLUMN "recordist" SET NOT NULL,
ALTER COLUMN "artist" SET NOT NULL,
ALTER COLUMN "deviceRecorder" SET NOT NULL,
ALTER COLUMN "formatQuality" SET NOT NULL,
ALTER COLUMN "accessAndLicense" SET NOT NULL,
ALTER COLUMN "tags" SET NOT NULL,
ALTER COLUMN "length" SET NOT NULL,
ALTER COLUMN "length" SET DATA TYPE INTEGER,
ALTER COLUMN "media" SET NOT NULL;
