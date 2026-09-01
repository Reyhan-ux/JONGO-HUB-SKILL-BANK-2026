import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function getPlatformStats() {
  const [
    totalFellows,
    verifiedGraduates,
    activeEmployers,
    verifiedEmployers,
    activeJobsPosted,
    totalPlacements,
    activeMentors,
    totalCapstonesAudited,
  ] = await Promise.all([
    prisma.graduate.count(),
    prisma.graduate.count({ where: { verified: true } }),
    prisma.employer.count(),
    prisma.employer.count({ where: { verified: true } }),
    prisma.job.count({ where: { status: 'open' } }),
    prisma.connection.count({ where: { status: 'Placed_Hired' } }),
    prisma.mentor.count(),
    prisma.evaluation.count(),
  ]);

  const placementRate = totalFellows > 0 ? ((totalPlacements / totalFellows) * 100).toFixed(1) + '%' : '0%';

  return {
    totalFellows,
    verifiedGraduates,
    activeEmployers,
    verifiedEmployers,
    activeJobsPosted,
    totalPlacements,
    placementRate,
    activeMentors,
    totalCapstonesAudited,
  };
}

export async function approveTalent(graduateId: string) {
  return prisma.graduate.update({
    where: { id: graduateId },
    data: { isSkillBankApproved: true },
  });
}