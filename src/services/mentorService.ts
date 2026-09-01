import prisma from '../config/prisma';
import { createNotification } from './notificationService';



export async function getMyMentorProfile(userId: string) {
  return prisma.mentor.findUnique({ where: { userId } });
}

export async function getMyMentees(mentorUserId: string) {
  const mentor = await prisma.mentor.findUnique({ where: { userId: mentorUserId } });
  if (!mentor) throw new Error('Mentor profile not found');

  return prisma.graduate.findMany({ where: { assignedMentorId: mentor.id } });
}

export async function createEvaluation(mentorUserId: string, data: {
  menteeId: string;
  categories: Record<string, number>;
  strengths?: string;
  improvements?: string;
  feedback?: string;
  grade?: string;
}) {
  const mentor = await prisma.mentor.findUnique({ where: { userId: mentorUserId } });
  if (!mentor) throw new Error('Mentor profile not found');

  const avgScore = Math.round(
    Object.values(data.categories).reduce((a, b) => a + b, 0) / Object.values(data.categories).length
  );

  const evaluation = await prisma.evaluation.create({
    data: {
      graduateId: data.menteeId,
      mentorId: mentor.id,
      notes: JSON.stringify({ strengths: data.strengths, improvements: data.improvements, feedback: data.feedback, grade: data.grade, categories: data.categories }),
      score: avgScore,
    },
  });

  const mentee = await prisma.graduate.findUnique({ where: { id: data.menteeId } });
  if (mentee?.userId) {
    await createNotification(mentee.userId, 'You received a new evaluation from your mentor.', 'evaluation');
  }

  return evaluation;
}

export async function getMyEvaluations(mentorUserId: string) {
  const mentor = await prisma.mentor.findUnique({ where: { userId: mentorUserId } });
  if (!mentor) throw new Error('Mentor profile not found');

  return prisma.evaluation.findMany({ where: { mentorId: mentor.id }, orderBy: { createdAt: 'desc' } });
}

export async function scheduleSession(mentorUserId: string, data: {
  menteeId: string;
  topic: string;
  sessionDate: string;
  sessionTime?: string;
  meetLink?: string;
}) {
  const mentor = await prisma.mentor.findUnique({ where: { userId: mentorUserId } });
  if (!mentor) throw new Error('Mentor profile not found');

  const session = await prisma.mentorSession.create({
    data: {
      mentorId: mentor.id,
      menteeId: data.menteeId,
      topic: data.topic,
      sessionDate: new Date(data.sessionDate),
      sessionTime: data.sessionTime,
      meetLink: data.meetLink,
    },
  });

  const mentee = await prisma.graduate.findUnique({ where: { id: data.menteeId } });
  if (mentee?.userId) {
    await createNotification(mentee.userId, `A mentoring session has been scheduled: ${data.topic}`, 'session');
  }

  return session;
}

export async function getMySessions(mentorUserId: string) {
  const mentor = await prisma.mentor.findUnique({ where: { userId: mentorUserId } });
  if (!mentor) throw new Error('Mentor profile not found');

  return prisma.mentorSession.findMany({ where: { mentorId: mentor.id }, orderBy: { sessionDate: 'asc' } });
}

export async function addResource(mentorUserId: string, title: string, url?: string) {
  const mentor = await prisma.mentor.findUnique({ where: { userId: mentorUserId } });
  if (!mentor) throw new Error('Mentor profile not found');

  return prisma.mentorResource.create({ data: { mentorId: mentor.id, title, url } });
}

export async function getMyResources(mentorUserId: string) {
  const mentor = await prisma.mentor.findUnique({ where: { userId: mentorUserId } });
  if (!mentor) throw new Error('Mentor profile not found');

  return prisma.mentorResource.findMany({ where: { mentorId: mentor.id }, orderBy: { createdAt: 'desc' } });
}

export async function addRecommendation(mentorUserId: string, menteeId: string, text: string) {
  const mentor = await prisma.mentor.findUnique({ where: { userId: mentorUserId } });
  if (!mentor) throw new Error('Mentor profile not found');

  return prisma.recommendation.create({ data: { mentorId: mentor.id, menteeId, text } });
}

export async function getMyRecommendations(mentorUserId: string) {
  const mentor = await prisma.mentor.findUnique({ where: { userId: mentorUserId } });
  if (!mentor) throw new Error('Mentor profile not found');

  return prisma.recommendation.findMany({ where: { mentorId: mentor.id }, orderBy: { createdAt: 'desc' } });
}