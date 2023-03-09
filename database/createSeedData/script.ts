import createEmployee from './employee';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // await prisma.$transaction(async (tx) => {
  //   await prisma.$transaction([createEmployee]);
  // });
  const res = await prisma.employees.findMany();
  console.dir(res, { depth: null });
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
