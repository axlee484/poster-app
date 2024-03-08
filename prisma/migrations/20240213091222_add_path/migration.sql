/*
  Warnings:

  - Added the required column `path` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "path" TEXT NOT NULL,
ADD COLUMN     "size" INTEGER NOT NULL;
