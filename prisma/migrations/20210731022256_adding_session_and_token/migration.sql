/*
  Warnings:

  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - Added the required column `hashedPassword` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Event` MODIFY `endDateTime` TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP(0);

-- AlterTable
ALTER TABLE `User` DROP COLUMN `password`,
    ADD COLUMN `hashedPassword` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Session` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT ('0000-00-00 00:00:00'),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `expiresAt` DATETIME(3),
    `handle` VARCHAR(191) NOT NULL,
    `hashedSessionToken` VARCHAR(191),
    `antiCSRFToken` VARCHAR(191),
    `publicData` VARCHAR(191),
    `privateData` VARCHAR(191),
    `userId` INTEGER,

    UNIQUE INDEX `Session.handle_unique`(`handle`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Token` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `hashedToken` VARCHAR(191) NOT NULL,
    `type` ENUM('RESET_PASSWORD') NOT NULL,
    `expiresAt` DATETIME(3) NOT NULL,
    `sentTo` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `Token.hashedToken_type_unique`(`hashedToken`, `type`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Session` ADD FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Token` ADD FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
