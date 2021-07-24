/*
  Warnings:

  - You are about to drop the `SongList` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `SongList` DROP FOREIGN KEY `SongList_ibfk_1`;

-- DropForeignKey
ALTER TABLE `SongList` DROP FOREIGN KEY `SongList_ibfk_2`;

-- AlterTable
ALTER TABLE `Event` MODIFY `endDateTime` TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP(0);

-- DropTable
DROP TABLE `SongList`;

-- CreateTable
CREATE TABLE `EventSongList` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `eventId` INTEGER,
    `songId` INTEGER,
    `published` INTEGER NOT NULL DEFAULT 0,
    `description` TEXT,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT ('0000-00-00 00:00:00'),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `EventSongList` ADD FOREIGN KEY (`eventId`) REFERENCES `Event`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EventSongList` ADD FOREIGN KEY (`songId`) REFERENCES `Song`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
