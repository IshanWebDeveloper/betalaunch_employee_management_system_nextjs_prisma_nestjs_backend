import createEmployee from './employee';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  const createInitialSeedData = await prisma.$transaction(async (tx) => {
    await prisma.$transaction([createEmployee]);
  });

  console.log(createInitialSeedData, { depth: null });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
