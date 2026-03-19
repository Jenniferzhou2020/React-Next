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

  const billingTypes = [
    { billingTypeName: "Paypal", comment: "PayPal payment method" },
    { billingTypeName: "CreditCard", comment: "Credit card payment" },
    { billingTypeName: "MasterCard", comment: "MasterCard payment" },
    { billingTypeName: "Debit", comment: "Debit card payment" }
  ];

  for (const billingType of billingTypes) {
    await prisma.billingType.upsert({
      where: { billingTypeName: billingType.billingTypeName },
      update: {},
      create: billingType,
    });
  }
  console.log(`Seeded billing types: ${billingTypes.map(bt => bt.billingTypeName).join(", ")}`);

  const orderStatuses = ["Ordered", "Shipping", "Received"];

  for (const status of orderStatuses) {
    await prisma.orderStatus.upsert({
      where: { orderStatus: status },
      update: {},
      create: { orderStatus: status },
    });
  }
  console.log(`Seeded order statuses: ${orderStatuses.join(", ")}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
