import { Response } from 'express';
import { AuthRequest } from '../middleware/authMiddleware';
import { createConversation, getMyConversations, getConversationMessages, sendMessage } from '../services/messageService';

export async function listConversations(req: AuthRequest, res: Response) {
  try {
    const conversations = await getMyConversations(req.user!.userId);
    res.json({ data: conversations });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
}

export async function getConversation(req: AuthRequest, res: Response) {
  try {
    const messages = await getConversationMessages(req.params.conversationId, req.user!.userId);
    res.json({ data: messages });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
}

export async function startConversation(req: AuthRequest, res: Response) {
  try {
    const { recipientId, initialMessage } = req.body;
    if (!recipientId || !initialMessage) return res.status(400).json({ message: 'recipientId and initialMessage are required' });

    const conversation = await createConversation(req.user!.userId, recipientId, initialMessage);
    res.status(201).json({ data: conversation });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}

export async function postMessage(req: AuthRequest, res: Response) {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ message: 'text is required' });

    const message = await sendMessage(req.params.conversationId, req.user!.userId, text);
    res.status(201).json({ data: message });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}