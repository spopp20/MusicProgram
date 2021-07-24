-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT ('0000-00-00 00:00:00'),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191),
    `password` VARCHAR(191) NOT NULL,
    `active` INTEGER NOT NULL DEFAULT 1,
    `groupId` INTEGER,

    UNIQUE INDEX `User.email_unique`(`email`),
    UNIQUE INDEX `User.email_active_unique`(`email`, `active`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Group` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT ('0000-00-00 00:00:00'),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Event` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(128) NOT NULL DEFAULT '',
    `active` INTEGER NOT NULL DEFAULT 1,
    `description` TEXT,
    `venue` TEXT,
    `location` TEXT,
    `notes` TEXT,
    `telephone` TEXT,
    `startDateTime` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `endDateTime` TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP(0),
    `createAt` TIMESTAMP(0) NOT NULL DEFAULT ('0000-00-00 00:00:00'),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SongList` (
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
CREATE TABLE `Song` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(128) NOT NULL DEFAULT '',
    `active` INTEGER NOT NULL DEFAULT 1,
    `alias` VARCHAR(128),
    `startKey` VARCHAR(15),
    `tempoCd` INTEGER,
    `startWords` TEXT,
    `arrangement` TEXT,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT ('0000-00-00 00:00:00'),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SongTag` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tagId` INTEGER,
    `songId` INTEGER,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tag` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Tag.name_unique`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Instrument` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(128) NOT NULL DEFAULT '',
    `active` INTEGER NOT NULL DEFAULT 1,
    `description` TEXT,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT ('0000-00-00 00:00:00'),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SheetMusic` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `songId` INTEGER,
    `instrumentId` INTEGER,
    `notes` VARCHAR(128),
    `words` TEXT,
    `mimeType` VARCHAR(128),
    `file` TEXT,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT ('0000-00-00 00:00:00'),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD FOREIGN KEY (`groupId`) REFERENCES `Group`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SongList` ADD FOREIGN KEY (`eventId`) REFERENCES `Event`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SongList` ADD FOREIGN KEY (`songId`) REFERENCES `Song`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SongTag` ADD FOREIGN KEY (`tagId`) REFERENCES `Tag`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SongTag` ADD FOREIGN KEY (`songId`) REFERENCES `Song`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SheetMusic` ADD FOREIGN KEY (`songId`) REFERENCES `Song`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SheetMusic` ADD FOREIGN KEY (`instrumentId`) REFERENCES `Instrument`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
