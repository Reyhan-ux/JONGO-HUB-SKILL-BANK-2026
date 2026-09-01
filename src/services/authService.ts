import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../config/prisma';
const JWT_SECRET = process.env.JWT_SECRET as string;

export async function registerUser(fullName: string, email: string, password: string, role: string) {
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    throw new Error('Email already in use');
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: { fullName, email, passwordHash, role },
  });

  // Auto-create the role-specific profile row
  if (role === 'talent') {
    await prisma.graduate.create({
      data: { userId: user.id, fullName, email },
    });
  } else if (role === 'employer') {
    await prisma.employer.create({
      data: { userId: user.id, companyName: fullName },
    });
  } else if (role === 'mentor') {
    await prisma.mentor.create({
      data: { userId: user.id, fullName },
    });
  }

  return user;
}

export async function loginUser(email: string, password: string) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new Error('Invalid email or password');
  }

  const passwordMatches = await bcrypt.compare(password, user.passwordHash);
  if (!passwordMatches) {
    throw new Error('Invalid email or password');
  }

  await prisma.user.update({
    where: { id: user.id },
    data: { lastLoginAt: new Date() },
  });

  const token = jwt.sign(
    { userId: user.id, role: user.role },
    JWT_SECRET,
    { expiresIn: '7d' }
  );

  return { token, user };
}