/*
  Warnings:

  - You are about to drop the `EventSongList` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SheetMusic` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `EventSongList` DROP FOREIGN KEY `EventSongList_ibfk_1`;

-- DropForeignKey
ALTER TABLE `EventSongList` DROP FOREIGN KEY `EventSongList_ibfk_2`;

-- DropForeignKey
ALTER TABLE `SheetMusic` DROP FOREIGN KEY `SheetMusic_ibfk_2`;

-- DropForeignKey
ALTER TABLE `SheetMusic` DROP FOREIGN KEY `SheetMusic_ibfk_1`;

-- AlterTable
ALTER TABLE `Event` MODIFY `endDateTime` TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP(0);

-- DropTable
DROP TABLE `EventSongList`;

-- DropTable
DROP TABLE `SheetMusic`;

-- CreateTable
CREATE TABLE `EventSong` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `eventId` INTEGER,
    `songId` INTEGER,
    `published` INTEGER NOT NULL DEFAULT 0,
    `description` TEXT,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT ('0000-00-00 00:00:00'),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InstrumentSong` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `notes` VARCHAR(128),
    `words` TEXT,
    `mimeType` VARCHAR(128),
    `file` TEXT,
    `songId` INTEGER,
    `instrumentId` INTEGER,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT ('0000-00-00 00:00:00'),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `EventSong` ADD FOREIGN KEY (`eventId`) REFERENCES `Event`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EventSong` ADD FOREIGN KEY (`songId`) REFERENCES `Song`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InstrumentSong` ADD FOREIGN KEY (`songId`) REFERENCES `Song`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InstrumentSong` ADD FOREIGN KEY (`instrumentId`) REFERENCES `Instrument`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
