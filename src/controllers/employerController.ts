import { Response } from 'express';
import { AuthRequest } from '../middleware/authMiddleware';
import { getAllEmployers, getEmployerById, updateEmployer, toggleEmployerVerification } from '../services/employerService';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function listEmployers(req: AuthRequest, res: Response) {
  try {
    const employers = await getAllEmployers();
    res.json({ data: employers });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
}

export async function getEmployer(req: AuthRequest, res: Response) {
  try {
    const employer = await getEmployerById(req.params.id);
    if (!employer) return res.status(404).json({ message: 'Employer not found' });
    res.json({ data: employer });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
}

export async function editEmployer(req: AuthRequest, res: Response) {
  try {
    const employer = await prisma.employer.findUnique({ where: { id: req.params.id } });
    if (!employer) return res.status(404).json({ message: 'Employer not found' });

    const isOwner = employer.userId === req.user!.userId;
    const isAdmin = req.user!.role === 'admin';
    if (!isOwner && !isAdmin) return res.status(403).json({ message: 'Forbidden' });

    const updated = await updateEmployer(req.params.id, req.body);
    res.json({ data: updated });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}

export async function verifyEmployer(req: AuthRequest, res: Response) {
  try {
    const employer = await toggleEmployerVerification(req.params.id);
    res.json({ data: employer });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}