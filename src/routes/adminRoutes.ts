import { Router } from 'express';
import { requireAuth, requireRole } from '../middleware/authMiddleware';
import { getStats, verifyTalent } from '../controllers/adminController';

const router = Router();

router.get('/stats', requireAuth, requireRole('admin'), getStats);
router.post('/verify-talent', requireAuth, requireRole('admin'), verifyTalent);

export default router;