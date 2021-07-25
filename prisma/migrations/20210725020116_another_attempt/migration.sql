-- AlterTable
ALTER TABLE `Event` MODIFY `endDateTime` TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP(0);

-- AlterTable
ALTER TABLE `InstrumentSong` ADD COLUMN `instrumentId` INTEGER,
    ADD COLUMN `songId` INTEGER;

-- CreateTable
CREATE TABLE `SongTag` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `songId` INTEGER,
    `tagId` INTEGER,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tag` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Tag.name_unique`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SongTag` ADD FOREIGN KEY (`songId`) REFERENCES `Song`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SongTag` ADD FOREIGN KEY (`tagId`) REFERENCES `Tag`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InstrumentSong` ADD FOREIGN KEY (`instrumentId`) REFERENCES `Instrument`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InstrumentSong` ADD FOREIGN KEY (`songId`) REFERENCES `Song`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
