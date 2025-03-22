-- DropForeignKey
ALTER TABLE `Booking` DROP FOREIGN KEY `Booking_productId_fkey`;

-- DropForeignKey
ALTER TABLE `Category` DROP FOREIGN KEY `Category_billboardId_fkey`;

-- DropForeignKey
ALTER TABLE `Color` DROP FOREIGN KEY `Color_storeId_fkey`;

-- DropForeignKey
ALTER TABLE `Image` DROP FOREIGN KEY `Image_productId_fkey`;

-- DropForeignKey
ALTER TABLE `Order` DROP FOREIGN KEY `Order_storeId_fkey`;

-- DropForeignKey
ALTER TABLE `OrderItem` DROP FOREIGN KEY `OrderItem_orderId_fkey`;

-- DropForeignKey
ALTER TABLE `OrderItem` DROP FOREIGN KEY `OrderItem_productId_fkey`;

-- DropForeignKey
ALTER TABLE `Product` DROP FOREIGN KEY `Product_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `Product` DROP FOREIGN KEY `Product_colorId_fkey`;

-- DropForeignKey
ALTER TABLE `Product` DROP FOREIGN KEY `Product_sizeId_fkey`;

-- DropForeignKey
ALTER TABLE `Size` DROP FOREIGN KEY `Size_storeId_fkey`;

-- DropForeignKey
ALTER TABLE `Store` DROP FOREIGN KEY `Store_userId_fkey`;
