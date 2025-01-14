
import { PrismaClient } from '@prisma/client';

let prismaInstance = null;

const prismaClientSingleton = () => {
  if (!prismaInstance) {
    prismaInstance = new PrismaClient();
  }
  return prismaInstance;
};

export const prisma = prismaClientSingleton();