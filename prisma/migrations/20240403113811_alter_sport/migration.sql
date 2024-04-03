/*
  Warnings:

  - You are about to drop the column `Availability` on the `Sport` table. All the data in the column will be lost.
  - You are about to drop the column `Location` on the `Sport` table. All the data in the column will be lost.
  - You are about to drop the column `Price` on the `Sport` table. All the data in the column will be lost.
  - Added the required column `availability` to the `Sport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Sport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Sport` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Sport` DROP COLUMN `Availability`,
    DROP COLUMN `Location`,
    DROP COLUMN `Price`,
    ADD COLUMN `availability` INTEGER NOT NULL,
    ADD COLUMN `location` VARCHAR(191) NOT NULL,
    ADD COLUMN `price` DOUBLE NOT NULL;
