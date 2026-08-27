import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createOrGetProfile(userId: string) {
  let profile = await prisma.studentProfile.findUnique({
    where: { userId },
    include: { skills: true, projects: true },
  });

  if (!profile) {
    profile = await prisma.studentProfile.create({
      data: { userId, fullName: '' },
      include: { skills: true, projects: true },
    });
  }

  return profile;
}

export async function updateProfile(userId: string, data: {
  fullName?: string;
  bio?: string;
  location?: string;
  photoUrl?: string;
}) {
  await prisma.studentProfile.update({ where: { userId }, data });
  return recalculateReactorScore(userId);
}

export async function addSkill(userId: string, name: string, proficiency?: string) {
  const profile = await prisma.studentProfile.findUnique({ where: { userId } });
  if (!profile) throw new Error('Profile not found');

  await prisma.skill.create({
    data: { name, proficiency, studentProfileId: profile.id },
  });

  await recalculateReactorScore(userId);
  return prisma.studentProfile.findUnique({
    where: { userId },
    include: { skills: true, projects: true },
  });
}

export async function addProject(userId: string, data: {
  title: string;
  description?: string;
  githubUrl?: string;
  demoUrl?: string;
}) {
  const profile = await prisma.studentProfile.findUnique({ where: { userId } });
  if (!profile) throw new Error('Profile not found');

  await prisma.project.create({
    data: { ...data, studentProfileId: profile.id },
  });

  await recalculateReactorScore(userId);
  return prisma.studentProfile.findUnique({
    where: { userId },
    include: { skills: true, projects: true },
  });
}

export async function recalculateReactorScore(userId: string) {
  const profile = await prisma.studentProfile.findUnique({
    where: { userId },
    include: { skills: true, projects: true },
  });

  if (!profile) throw new Error('Profile not found');

  let score = 0;

  // Profile completeness: up to 20 points
  if (profile.fullName) score += 5;
  if (profile.bio) score += 5;
  if (profile.location) score += 5;
  if (profile.photoUrl) score += 5;

  // Skills: 5 points each, capped at 30
  score += Math.min(profile.skills.length * 5, 30);

  // Projects: 10 points each, capped at 40
  score += Math.min(profile.projects.length * 10, 40);

  // Verification bonus: 10 points
  if (profile.isVerified) score += 10;

  score = Math.min(score, 100);

  return prisma.studentProfile.update({
    where: { userId },
    data: { reactorScore: score },
  });
}

export async function searchStudents(filters: {
  skill?: string;
  location?: string;
  minScore?: number;
}) {
  return prisma.studentProfile.findMany({
    where: {
      AND: [
        filters.skill
          ? { skills: { some: { name: { contains: filters.skill, mode: 'insensitive' } } } }
          : {},
        filters.location
          ? { location: { contains: filters.location, mode: 'insensitive' } }
          : {},
        filters.minScore
          ? { reactorScore: { gte: filters.minScore } }
          : {},
      ],
    },
    include: { skills: true, projects: true },
  });
}

export async function getStudentById(id: string) {
  return prisma.studentProfile.findUnique({
    where: { id },
    include: { skills: true, projects: true },
  });
}