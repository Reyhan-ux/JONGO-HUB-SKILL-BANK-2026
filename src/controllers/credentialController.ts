import { Response, Request } from 'express';
import { AuthRequest } from '../middleware/authMiddleware';
import { issueCredential, verifyCredentialByCode, getAllCredentials, revokeCredential } from '../services/credentialService';

export async function publicVerifyCredential(req: Request, res: Response) {
  try {
    const credential = await verifyCredentialByCode(req.params.credentialCode);
    if (!credential) return res.status(404).json({ success: false, message: 'Credential not found' });
    res.json({ success: true, data: credential });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
}

export async function postIssueCredential(req: AuthRequest, res: Response) {
  try {
    const { studentId, studentName, programTrack } = req.body;
    if (!studentId || !studentName) return res.status(400).json({ message: 'studentId and studentName are required' });

    const credential = await issueCredential({ studentId, studentName, programTrack });
    res.status(201).json({ data: credential });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}

export async function listCredentials(req: AuthRequest, res: Response) {
  try {
    const credentials = await getAllCredentials();
    res.json({ data: credentials });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
}

export async function patchRevokeCredential(req: AuthRequest, res: Response) {
  try {
    const credential = await revokeCredential(req.params.id);
    res.json({ data: credential });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}