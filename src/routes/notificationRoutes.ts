import { Router } from 'express';
import { requireAuth } from '../middleware/authMiddleware';
import { listNotifications, markRead, markAllRead } from '../controllers/notificationController';

const router = Router();

router.get('/', requireAuth, listNotifications);
router.patch('/:id/read', requireAuth, markRead);
router.patch('/read-all', requireAuth, markAllRead);

export default router;