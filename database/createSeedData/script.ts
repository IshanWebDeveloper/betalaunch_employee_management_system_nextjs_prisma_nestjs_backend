import { PrismaClient } from '@prisma/client';
import createEmployee from './employee';

const prisma = new PrismaClient();

async function main() {
  await prisma.$transaction(async (tx) => {
    await prisma.$transaction([createEmployee]);
  });
  // const res = await prisma.employees.findMany({
  //   select: {
  //     Employee_Type: true,
  //   },
  //   distinct: ['Employee_Type'],
  // });
  // console.dir(res, { depth: null });

  const findByEmployeeType = await prisma.employees.findMany({
    where: {
      Employee_Type: 'Full_Time',
    },
  });
  console.dir(findByEmployeeType, { depth: null });
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
