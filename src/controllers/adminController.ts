import { Response } from 'express';
import { AuthRequest } from '../middleware/authMiddleware';
import { getPlatformStats, approveTalent } from '../services/adminService';

export async function getStats(req: AuthRequest, res: Response) {
  try {
    const stats = await getPlatformStats();
    res.json({ data: stats });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
}

export async function verifyTalent(req: AuthRequest, res: Response) {
  try {
    const { graduateId } = req.body;
    if (!graduateId) return res.status(400).json({ message: 'graduateId is required' });

    const graduate = await approveTalent(graduateId);
    res.json({ data: graduate });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}