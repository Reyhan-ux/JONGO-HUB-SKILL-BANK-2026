import { Router } from 'express';
import { requireAuth, requireRole } from '../middleware/authMiddleware';
import { postConnection, listConnections, listEmployerConnections, patchConnectionStatus } from '../controllers/connectionController';

const router = Router();

router.post('/', requireAuth, requireRole('admin'), postConnection);
router.get('/', requireAuth, requireRole('admin'), listConnections);
router.get('/employer', requireAuth, requireRole('employer'), listEmployerConnections);
router.patch('/:id', requireAuth, requireRole('admin'), patchConnectionStatus);

export default router;