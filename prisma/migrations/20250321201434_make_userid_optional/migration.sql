-- DropForeignKey
ALTER TABLE `Store` DROP FOREIGN KEY `Store_userId_fkey`;

-- AlterTable
ALTER TABLE `Store` MODIFY `userId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Store` ADD CONSTRAINT `Store_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
