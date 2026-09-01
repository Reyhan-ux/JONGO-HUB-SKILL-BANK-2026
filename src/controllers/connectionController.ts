import { Response } from 'express';
import { AuthRequest } from '../middleware/authMiddleware';
import { createConnection, getAllConnections, getEmployerConnections, updateConnectionStatus } from '../services/connectionService';

export async function postConnection(req: AuthRequest, res: Response) {
  try {
    const connection = await createConnection(req.body);
    res.status(201).json({ data: connection });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}

export async function listConnections(req: AuthRequest, res: Response) {
  try {
    const connections = await getAllConnections();
    res.json({ data: connections });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
}

export async function listEmployerConnections(req: AuthRequest, res: Response) {
  try {
    const connections = await getEmployerConnections(req.user!.userId);
    res.json({ data: connections });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
}

export async function patchConnectionStatus(req: AuthRequest, res: Response) {
  try {
    const { status } = req.body;
    if (!status) return res.status(400).json({ message: 'Status is required' });

    const connection = await updateConnectionStatus(req.params.id, status);
    res.json({ data: connection });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}