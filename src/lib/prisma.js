import { PrismaClient } from '@prisma/client';

// Prevent multiple instances in development (Next.js hot reload)
const globalForPrisma = globalThis;

const prisma = globalForPrisma.__prismaClient || new PrismaClient();

if (process.env.NODE_ENV === 'development') {
  globalForPrisma.__prismaClient = prisma;
}

export default prisma;
