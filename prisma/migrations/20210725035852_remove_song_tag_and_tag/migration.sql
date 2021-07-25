/*
  Warnings:

  - You are about to drop the `SongTag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `SongTag` DROP FOREIGN KEY `SongTag_ibfk_1`;

-- DropForeignKey
ALTER TABLE `SongTag` DROP FOREIGN KEY `SongTag_ibfk_2`;

-- AlterTable
ALTER TABLE `Event` MODIFY `endDateTime` TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP(0);

-- AlterTable
ALTER TABLE `Song` ADD COLUMN `tags` VARCHAR(191);

-- DropTable
DROP TABLE `SongTag`;

-- DropTable
DROP TABLE `Tag`;
