import { Router } from 'express';
import { requireAuth, requireRole } from '../middleware/authMiddleware';
import { listConversations, getConversation, startConversation, postMessage } from '../controllers/messageController';

const router = Router();

router.get('/conversations', requireAuth, listConversations);
router.get('/conversations/:conversationId', requireAuth, getConversation);
router.post('/conversations', requireAuth, requireRole('admin', 'mentor'), startConversation);
router.post('/conversations/:conversationId', requireAuth, postMessage);

export default router;