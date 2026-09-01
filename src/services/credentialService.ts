import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';
import QRCode from 'qrcode';

const prisma = new PrismaClient();

function generateCredentialCode(): string {
  const year = new Date().getFullYear();
  const random = Math.floor(1000 + Math.random() * 9000);
  return `JHR-${year}-${random}`;
}

export async function issueCredential(data: { studentId: string; studentName: string; programTrack?: string }) {
  const credentialCode = generateCredentialCode();
  const hash = crypto
    .createHash('sha256')
    .update(`${data.studentId}-${credentialCode}-${Date.now()}`)
    .digest('hex');

  const verificationUrl = `${process.env.PLATFORM_BASE_URL || 'http://localhost:5173'}/verify/${credentialCode}`;
  const qrCodeUrl = await QRCode.toDataURL(verificationUrl);

  const credential = await prisma.credential.create({
    data: {
      graduateId: data.studentId,
      credentialCode,
      studentName: data.studentName,
      programTrack: data.programTrack,
      hash,
      qrCodeUrl,
    },
  });

  await prisma.graduate.update({
    where: { id: data.studentId },
    data: { verified: true, credentialId: credential.id },
  });

  return credential;
}

export async function verifyCredentialByCode(code: string) {
  return prisma.credential.findUnique({ where: { credentialCode: code } });
}

export async function getAllCredentials() {
  return prisma.credential.findMany({ orderBy: { issueDate: 'desc' } });
}

export async function revokeCredential(id: string) {
  return prisma.credential.update({
    where: { id },
    data: { verificationStatus: 'Revoked' },
  });
}