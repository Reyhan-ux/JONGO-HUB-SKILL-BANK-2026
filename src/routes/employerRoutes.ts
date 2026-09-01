import { Router } from 'express';
import { requireAuth, requireRole } from '../middleware/authMiddleware';
import { publicVerifyCredential, postIssueCredential, listCredentials, patchRevokeCredential } from '../controllers/credentialController';

const router = Router();

router.get('/verify/:credentialCode', publicVerifyCredential);
router.post('/issue', requireAuth, requireRole('admin'), postIssueCredential);
router.get('/', requireAuth, requireRole('admin'), listCredentials);
router.patch('/:id/revoke', requireAuth, requireRole('admin'), patchRevokeCredential);

export default router;