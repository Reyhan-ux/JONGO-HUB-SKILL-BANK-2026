import { Router } from 'express';
import { requireAuth, requireRole } from '../middleware/authMiddleware';
import { listGraduates, getGraduate, getMyProfile, editMyProfile } from '../controllers/graduateController';

const router = Router();

router.get('/', requireAuth, listGraduates);
router.get('/me', requireAuth, requireRole('talent'), getMyProfile);
router.put('/me', requireAuth, requireRole('talent'), editMyProfile);
router.get('/:id', requireAuth, getGraduate);

export default router;