import prisma from '../config/prisma';

export async function getAllEmployers() {
  return prisma.employer.findMany({ where: { verified: true } });
}

export async function getEmployerById(id: string) {
  return prisma.employer.findUnique({ where: { id } });
}

export async function updateEmployer(id: string, data: any) {
  return prisma.employer.update({ where: { id }, data });
}

export async function toggleEmployerVerification(id: string) {
  const employer = await prisma.employer.findUnique({ where: { id } });
  if (!employer) throw new Error('Employer not found');

  return prisma.employer.update({
    where: { id },
    data: { verified: !employer.verified },
  });
}