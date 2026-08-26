import { Router } from 'express';
import { register, login } from '../controllers/authController';
import { requireAuth, AuthRequest } from '../middleware/authMiddleware';
import { Response } from 'express';

const router = Router();

router.post('/register', register);
router.post('/login', login);

router.get('/me', requireAuth, (req: AuthRequest, res: Response) => {
  res.json({ message: 'You are authenticated', user: req.user });
});

export default router;