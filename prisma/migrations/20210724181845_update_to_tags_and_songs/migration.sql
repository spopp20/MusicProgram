/*
  Warnings:

  - You are about to drop the column `groupId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Group` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_ibfk_1`;

-- AlterTable
ALTER TABLE `Event` MODIFY `endDateTime` TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP(0);

-- AlterTable
ALTER TABLE `User` DROP COLUMN `groupId`,
    ADD COLUMN `role` ENUM('USER', 'EDITOR', 'LEADER', 'ADMIN') NOT NULL DEFAULT 'USER';

-- DropTable
DROP TABLE `Group`;
