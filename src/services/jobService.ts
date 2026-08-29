import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function createJob(employerUserId: string, data: { title: string; description?: string; location?: string; jobType?: string }) {
  const employer = await prisma.employer.findUnique({ where: { userId: employerUserId } });
  if (!employer) throw new Error('Employer profile not found');

  return prisma.job.create({
    data: { ...data, employerId: employer.id },
  });
}

export async function getAllJobs(filters: { status?: string }) {
  return prisma.job.findMany({
    where: filters.status ? { status: filters.status } : {},
    include: { employer: true },
    orderBy: { createdAt: 'desc' },
  });
}

export async function getJobById(id: string) {
  return prisma.job.findUnique({
    where: { id },
    include: { employer: true, applications: true },
  });
}