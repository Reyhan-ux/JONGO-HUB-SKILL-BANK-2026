import { Response } from 'express';
import { AuthRequest } from '../middleware/authMiddleware';
import { getMyNotifications, deleteNotification, deleteAllNotifications } from '../services/notificationService';

export async function listNotifications(req: AuthRequest, res: Response) {
  try {
    const { notifications, unreadCount } = await getMyNotifications(req.user!.userId);
    res.json({ data: notifications, unreadCount });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
}

export async function markRead(req: AuthRequest, res: Response) {
  try {
    await deleteNotification(req.params.id, req.user!.userId);
    res.json({ message: 'Notification cleared' });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}

export async function markAllRead(req: AuthRequest, res: Response) {
  try {
    await deleteAllNotifications(req.user!.userId);
    res.json({ message: 'All notifications cleared' });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}