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
  const profile = await prisma.studentProfile.update({
    where: { userId },
    data,
  });
  return profile;
}

export async function addSkill(userId: string, name: string, proficiency?: string) {
  const profile = await prisma.studentProfile.findUnique({ where: { userId } });
  if (!profile) throw new Error('Profile not found');

  return prisma.skill.create({
    data: { name, proficiency, studentProfileId: profile.id },
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

  return prisma.project.create({
    data: { ...data, studentProfileId: profile.id },
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