import { Response } from 'express';
import { AuthRequest } from '../middleware/authMiddleware';
import { getAllGraduates, getGraduateById, getMyGraduateProfile, updateGraduateProfile } from '../services/graduateService';

export async function listGraduates(req: AuthRequest, res: Response) {
  try {
    const { location, approved } = req.query;
    const graduates = await getAllGraduates({
      location: location as string | undefined,
      approved: approved === 'true' ? true : approved === 'false' ? false : undefined,
    });
    res.json({ data: graduates });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
}

export async function getGraduate(req: AuthRequest, res: Response) {
  try {
    const graduate = await getGraduateById(req.params.id);
    if (!graduate) return res.status(404).json({ message: 'Graduate not found' });
    res.json({ data: graduate });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
}

export async function getMyProfile(req: AuthRequest, res: Response) {
  try {
    const profile = await getMyGraduateProfile(req.user!.userId);
    if (!profile) return res.status(404).json({ message: 'Profile not found' });
    res.json({ data: profile });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
}

export async function editMyProfile(req: AuthRequest, res: Response) {
  try {
    const profile = await updateGraduateProfile(req.user!.userId, req.body);
    res.json({ data: profile });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}