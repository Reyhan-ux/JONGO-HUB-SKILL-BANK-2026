import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function createNotification(userId: string, message: string, type?: string) {
  return prisma.notification.create({ data: { userId, message, type } });
}

export async function getMyNotifications(userId: string) {
  const notifications = await prisma.notification.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
    take: 50,
  });
  const unreadCount = await prisma.notification.count({ where: { userId, isRead: false } });
  return { notifications, unreadCount };
}

export async function deleteNotification(id: string, userId: string) {
  return prisma.notification.deleteMany({ where: { id, userId } });
}

export async function deleteAllNotifications(userId: string) {
  return prisma.notification.deleteMany({ where: { userId } });
}