const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash('admin123', 10);
  const user = await prisma.user.create({
    data: { fullName: 'Admin User', email: 'admin@test.com', passwordHash, role: 'admin' },
  });
  console.log('Admin created:', user.email);
}

main().finally(() => prisma.$disconnect());