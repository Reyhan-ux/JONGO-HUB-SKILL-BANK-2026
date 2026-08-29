import { Response } from 'express';
import { AuthRequest } from '../middleware/authMiddleware';
import { createJob, getAllJobs, getJobById } from '../services/jobService';
import { applyToJob, getApplicationsForJob } from '../services/applicationService';

export async function postJob(req: AuthRequest, res: Response) {
  try {
    const { title, description, location, jobType } = req.body;
    if (!title) return res.status(400).json({ message: 'Job title is required' });

    const job = await createJob(req.user!.userId, { title, description, location, jobType });
    res.status(201).json({ data: job });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}

export async function listJobs(req: AuthRequest, res: Response) {
  try {
    const { status } = req.query;
    const jobs = await getAllJobs({ status: status as string | undefined });
    res.json({ data: jobs });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
}

export async function getJob(req: AuthRequest, res: Response) {
  try {
    const job = await getJobById(req.params.id);
    if (!job) return res.status(404).json({ message: 'Job not found' });
    res.json({ data: job });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
}

export async function applyForJob(req: AuthRequest, res: Response) {
  try {
    const application = await applyToJob(req.user!.userId, req.params.id);
    res.status(201).json({ data: application });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}

export async function listJobApplications(req: AuthRequest, res: Response) {
  try {
    const applications = await getApplicationsForJob(req.params.id);
    res.json({ data: applications });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
}