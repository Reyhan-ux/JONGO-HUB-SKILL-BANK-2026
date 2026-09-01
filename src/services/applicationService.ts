import prisma from '../config/prisma';

export async function applyToJob(talentUserId: string, jobId: string) {
  const graduate = await prisma.graduate.findUnique({ where: { userId: talentUserId } });
  if (!graduate) throw new Error('Graduate profile not found');

  const existing = await prisma.application.findFirst({
    where: { jobId, graduateId: graduate.id },
  });
  if (existing) throw new Error('Already applied to this job');

  return prisma.application.create({
    data: { jobId, graduateId: graduate.id },
  });
}

export async function getMyApplications(talentUserId: string) {
  const graduate = await prisma.graduate.findUnique({ where: { userId: talentUserId } });
  if (!graduate) throw new Error('Graduate profile not found');

  return prisma.application.findMany({
    where: { graduateId: graduate.id },
    include: { job: { include: { employer: true } } },
    orderBy: { createdAt: 'desc' },
  });
}

export async function getApplicationsForJob(jobId: string) {
  return prisma.application.findMany({
    where: { jobId },
    include: { graduate: true },
  });
}