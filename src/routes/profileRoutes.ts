import { Router } from 'express';
import { requireAuth, requireRole } from '../middleware/authMiddleware';
import { getMyProfile, editMyProfile, createSkill, createProject } from '../controllers/profileController';

const router = Router();

router.get('/me', requireAuth, requireRole('STUDENT'), getMyProfile);
router.put('/me', requireAuth, requireRole('STUDENT'), editMyProfile);
router.post('/me/skills', requireAuth, requireRole('STUDENT'), createSkill);
router.post('/me/projects', requireAuth, requireRole('STUDENT'), createProject);

export default router;