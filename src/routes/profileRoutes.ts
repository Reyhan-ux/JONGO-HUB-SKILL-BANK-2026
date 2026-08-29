import { Router } from 'express';
import { requireAuth, requireRole } from '../middleware/authMiddleware';
import {
  getMyProfile,
  editMyProfile,
  createSkill,
  createProject,
  searchTalent,
  viewStudentProfile,
  contactStudent,
  myContactRequests,
} from '../controllers/profileController';

const router = Router();

router.get('/me', requireAuth, requireRole('REACTOR_GRADUATE'), getMyProfile);
router.put('/me', requireAuth, requireRole('REACTOR_GRADUATE'), editMyProfile);
router.post('/me/skills', requireAuth, requireRole('REACTOR_GRADUATE'), createSkill);
router.post('/me/projects', requireAuth, requireRole('REACTOR_GRADUATE'), createProject);
router.get('/me/contact-requests', requireAuth, requireRole('REACTOR_GRADUATE'), myContactRequests);

router.get('/search', requireAuth, requireRole('EMPLOYER', 'ADMINISTRATOR'), searchTalent);
router.get('/:id', requireAuth, requireRole('EMPLOYER', 'ADMINISTRATOR'), viewStudentProfile);
router.post('/:id/contact', requireAuth, requireRole('EMPLOYER', 'ADMINISTRATOR'), contactStudent);

export default router;