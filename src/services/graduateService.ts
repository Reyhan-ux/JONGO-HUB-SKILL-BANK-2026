import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function getAllGraduates(filters: { skill?: string; location?: string; approved?: boolean }) {
  return prisma.graduate.findMany({
    where: {
      AND: [
        filters.location ? { location: { contains: filters.location, mode: 'insensitive' } } : {},
        filters.approved !== undefined ? { isSkillBankApproved: filters.approved } : {},
      ],
    },
  });
}

export async function getGraduateById(id: string) {
  return prisma.graduate.findUnique({ where: { id } });
}

export async function getMyGraduateProfile(userId: string) {
  return prisma.graduate.findUnique({ where: { userId } });
}

export async function updateGraduateProfile(userId: string, data: any) {
  return prisma.graduate.update({ where: { userId }, data });
}