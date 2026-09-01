import prisma from '../config/prisma';

export async function createConnection(data: {
  graduateId: string;
  employerId?: string;
  jobId?: string;
  applicationId?: string;
  notes?: string;
}) {
  const connection = await prisma.connection.create({ data });

  if (data.applicationId) {
    await prisma.application.update({
      where: { id: data.applicationId },
      data: { status: 'interviewing' },
    });
  }

  return connection;
}

export async function getAllConnections() {
  return prisma.connection.findMany({
    include: { graduate: true, employer: true },
    orderBy: { createdAt: 'desc' },
  });
}

export async function getEmployerConnections(employerUserId: string) {
  const employer = await prisma.employer.findUnique({ where: { userId: employerUserId } });
  if (!employer) throw new Error('Employer profile not found');

  return prisma.connection.findMany({
    where: { employerId: employer.id },
    include: { graduate: true },
    orderBy: { createdAt: 'desc' },
  });
}

export async function updateConnectionStatus(id: string, status: string) {
  const connection = await prisma.connection.update({
    where: { id },
    data: { status },
  });

  if (status === 'Placed_Hired') {
    if (connection.applicationId) {
      await prisma.application.update({
        where: { id: connection.applicationId },
        data: { status: 'hired' },
      });
    }
    await prisma.graduate.update({
      where: { id: connection.graduateId },
      data: { employmentStatus: 'employed' },
    });
    if (connection.employerId) {
      await prisma.employer.update({
        where: { id: connection.employerId },
        data: { hiredFellowsCount: { increment: 1 } },
      });
    }
  }

  return connection;
}