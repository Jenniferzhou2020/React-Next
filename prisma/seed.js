/* eslint-disable @typescript-eslint/no-require-imports */

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const roles = ["USER", "ADMIN"];
  for (const name of roles) {
    await prisma.role.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }
  console.log(`Seeded roles: ${roles.join(", ")}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
