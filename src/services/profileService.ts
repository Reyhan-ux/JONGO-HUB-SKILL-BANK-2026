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

export async function createOrGetEmployerProfile(userId: string, companyName?: string) {
  let profile = await prisma.employerProfile.findUnique({ where: { userId } });

  if (!profile) {
    profile = await prisma.employerProfile.create({
      data: { userId, companyName: companyName || '' },
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

  if (profile.fullName) score += 5;
  if (profile.bio) score += 5;
  if (profile.location) score += 5;
  if (profile.photoUrl) score += 5;

  score += Math.min(profile.skills.length * 5, 30);
  score += Math.min(profile.projects.length * 10, 40);

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

export async function sendContactRequest(employerUserId: string, studentProfileId: string, message: string) {
  const employerProfile = await createOrGetEmployerProfile(employerUserId);

  const studentProfile = await prisma.studentProfile.findUnique({ where: { id: studentProfileId } });
  if (!studentProfile) throw new Error('Student not found');

  return prisma.contactRequest.create({
    data: {
      employerProfileId: employerProfile.id,
      studentProfileId: studentProfile.id,
      message,
    },
  });
}

export async function getMyContactRequests(studentUserId: string) {
  const profile = await prisma.studentProfile.findUnique({ where: { userId: studentUserId } });
  if (!profile) throw new Error('Profile not found');

  return prisma.contactRequest.findMany({
    where: { studentProfileId: profile.id },
    include: { employerProfile: true },
    orderBy: { createdAt: 'desc' },
  });
}
export async function verifyStudent(studentProfileId: string) {
  const profile = await prisma.studentProfile.update({
    where: { id: studentProfileId },
    data: { isVerified: true },
  });

  return recalculateReactorScore(profile.userId);
}

export async function getVerifiedProfileForCertificate(studentProfileId: string) {
  const profile = await prisma.studentProfile.findUnique({
    where: { id: studentProfileId },
    include: { user: true },
  });

  if (!profile) throw new Error('Student not found');
  if (!profile.isVerified) throw new Error('Student is not verified yet');

  return profile;
}