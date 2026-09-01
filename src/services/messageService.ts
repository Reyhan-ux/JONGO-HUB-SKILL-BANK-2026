import prisma from '../config/prisma';

export async function createConversation(participantOneId: string, participantTwoId: string, initialMessage: string) {
  const conversation = await prisma.conversation.create({
    data: {
      participantOneId,
      participantTwoId,
      lastMessage: initialMessage,
      lastMessageAt: new Date(),
    },
  });

  await prisma.message.create({
    data: { conversationId: conversation.id, senderId: participantOneId, text: initialMessage },
  });

  return conversation;
}

export async function getMyConversations(userId: string) {
  const conversations = await prisma.conversation.findMany({
    where: { OR: [{ participantOneId: userId }, { participantTwoId: userId }] },
    orderBy: { lastMessageAt: 'desc' },
  });

  const withUnread = await Promise.all(
    conversations.map(async (c) => {
      const unreadCount = await prisma.message.count({
        where: { conversationId: c.id, senderId: { not: userId }, isRead: false },
      });
      return { ...c, unreadCount };
    })
  );

  return withUnread;
}

export async function getConversationMessages(conversationId: string, userId: string) {
  const messages = await prisma.message.findMany({
    where: { conversationId },
    orderBy: { createdAt: 'asc' },
  });

  await prisma.message.updateMany({
    where: { conversationId, senderId: { not: userId }, isRead: false },
    data: { isRead: true },
  });

  return messages;
}

export async function sendMessage(conversationId: string, senderId: string, text: string) {
  const message = await prisma.message.create({
    data: { conversationId, senderId, text },
  });

  await prisma.conversation.update({
    where: { id: conversationId },
    data: { lastMessage: text, lastMessageAt: new Date() },
  });

  return message;
}