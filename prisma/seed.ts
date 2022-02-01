import { PrismaClient, Prisma } from "@prisma/client";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient();

const password = bcrypt.hashSync("q1w2e3r4", 10);

const userData: Prisma.UserCreateInput[] = [
  {
    name: "Silvio Monnerat",
    email: "silviomonnerat@gmail.com",
    password: password,
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
