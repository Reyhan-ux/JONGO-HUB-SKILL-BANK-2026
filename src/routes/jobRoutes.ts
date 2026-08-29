import { Router } from 'express';
import { requireAuth, requireRole } from '../middleware/authMiddleware';
import { postJob, listJobs, getJob, applyForJob, listJobApplications } from '../controllers/jobController';

const router = Router();

router.get('/', requireAuth, listJobs);
router.post('/', requireAuth, requireRole('employer'), postJob);
router.get('/:id', requireAuth, getJob);
router.post('/:id/apply', requireAuth, requireRole('talent'), applyForJob);
router.get('/:id/applications', requireAuth, requireRole('employer', 'admin'), listJobApplications);

export default router;