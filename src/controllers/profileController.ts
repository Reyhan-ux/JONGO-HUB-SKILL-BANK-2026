import { Response } from 'express';
import { AuthRequest } from '../middleware/authMiddleware';
import { createOrGetProfile, updateProfile, addSkill, addProject, searchStudents, getStudentById } from '../services/profileService';

export async function getMyProfile(req: AuthRequest, res: Response) {
  try {
    const profile = await createOrGetProfile(req.user!.userId);
    res.json(profile);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

export async function editMyProfile(req: AuthRequest, res: Response) {
  try {
    const profile = await updateProfile(req.user!.userId, req.body);
    res.json(profile);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}

export async function createSkill(req: AuthRequest, res: Response) {
  try {
    const { name, proficiency } = req.body;
    if (!name) return res.status(400).json({ error: 'Skill name is required' });

    const skill = await addSkill(req.user!.userId, name, proficiency);
    res.status(201).json(skill);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}

export async function createProject(req: AuthRequest, res: Response) {
  try {
    const { title, description, githubUrl, demoUrl } = req.body;
    if (!title) return res.status(400).json({ error: 'Project title is required' });

    const project = await addProject(req.user!.userId, { title, description, githubUrl, demoUrl });
    res.status(201).json(project);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}
export async function searchTalent(req: AuthRequest, res: Response) {
  try {
    const { skill, location, minScore } = req.query;

    const results = await searchStudents({
      skill: skill as string | undefined,
      location: location as string | undefined,
      minScore: minScore ? parseInt(minScore as string) : undefined,
    });

    res.json(results);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

export async function viewStudentProfile(req: AuthRequest, res: Response) {
  try {
    const profile = await getStudentById(req.params.id);
    if (!profile) return res.status(404).json({ error: 'Student not found' });

    res.json(profile);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}