import { Router } from 'express';
import { requireAuth, requireRole } from '../middleware/authMiddleware';
import {
  myProfile,
  myMentees,
  postEvaluation,
  listEvaluations,
  postSession,
  listSessions,
  postResource,
  listResources,
  postRecommendation,
  listRecommendations,
} from '../controllers/mentorController';

const router = Router();

router.get('/me', requireAuth, requireRole('mentor'), myProfile);
router.get('/mentees', requireAuth, requireRole('mentor'), myMentees);
router.post('/evaluations', requireAuth, requireRole('mentor'), postEvaluation);
router.get('/evaluations', requireAuth, requireRole('mentor'), listEvaluations);
router.post('/sessions', requireAuth, requireRole('mentor'), postSession);
router.get('/sessions', requireAuth, requireRole('mentor'), listSessions);
router.post('/resources', requireAuth, requireRole('mentor'), postResource);
router.get('/resources', requireAuth, requireRole('mentor'), listResources);
router.post('/recommendations', requireAuth, requireRole('mentor'), postRecommendation);
router.get('/recommendations', requireAuth, requireRole('mentor'), listRecommendations);

export default router;