import { Response } from 'express';
import { AuthRequest } from '../middleware/authMiddleware';
import {
  getMyMentorProfile,
  getMyMentees,
  createEvaluation,
  getMyEvaluations,
  scheduleSession,
  getMySessions,
  addResource,
  getMyResources,
  addRecommendation,
  getMyRecommendations,
} from '../services/mentorService';

export async function myProfile(req: AuthRequest, res: Response) {
  try {
    const profile = await getMyMentorProfile(req.user!.userId);
    res.json({ data: profile });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
}

export async function myMentees(req: AuthRequest, res: Response) {
  try {
    const mentees = await getMyMentees(req.user!.userId);
    res.json({ data: mentees });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}

export async function postEvaluation(req: AuthRequest, res: Response) {
  try {
    const evaluation = await createEvaluation(req.user!.userId, req.body);
    res.status(201).json({ data: evaluation });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}

export async function listEvaluations(req: AuthRequest, res: Response) {
  try {
    const evaluations = await getMyEvaluations(req.user!.userId);
    res.json({ data: evaluations });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}

export async function postSession(req: AuthRequest, res: Response) {
  try {
    const session = await scheduleSession(req.user!.userId, req.body);
    res.status(201).json({ data: session });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}

export async function listSessions(req: AuthRequest, res: Response) {
  try {
    const sessions = await getMySessions(req.user!.userId);
    res.json({ data: sessions });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}

export async function postResource(req: AuthRequest, res: Response) {
  try {
    const { title, url } = req.body;
    if (!title) return res.status(400).json({ message: 'Title is required' });

    const resource = await addResource(req.user!.userId, title, url);
    res.status(201).json({ data: resource });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}

export async function listResources(req: AuthRequest, res: Response) {
  try {
    const resources = await getMyResources(req.user!.userId);
    res.json({ data: resources });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}

export async function postRecommendation(req: AuthRequest, res: Response) {
  try {
    const { menteeId, text } = req.body;
    if (!menteeId || !text) return res.status(400).json({ message: 'menteeId and text are required' });

    const recommendation = await addRecommendation(req.user!.userId, menteeId, text);
    res.status(201).json({ data: recommendation });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}

export async function listRecommendations(req: AuthRequest, res: Response) {
  try {
    const recommendations = await getMyRecommendations(req.user!.userId);
    res.json({ data: recommendations });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}