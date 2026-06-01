import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const main = async () => {
  const passwordHash = await bcrypt.hash("password", 10);

  await prisma.user.upsert({
    where: { email: "admin@altura.local" },
    update: {},
    create: {
      name: "Altura Admin",
      email: "admin@altura.local",
      passwordHash,
    },
  });

  const merbabu = await prisma.destination.upsert({
    where: { id: "00000000-0000-4000-8000-000000000001" },
    update: {},
    create: {
      id: "00000000-0000-4000-8000-000000000001",
      name: "Gunung Merbabu",
      type: "Mountain",
      province: "Jawa Tengah",
      region: "Magelang / Boyolali / Semarang",
      elevation: 3145,
      description: "Mountain destination used as initial MVP sample data.",
      bestSeason: "Dry season is generally preferred.",
      difficultyLevel: "MODERATE",
    },
  });

  await prisma.route.createMany({
    data: [
      {
        id: "00000000-0000-4000-8000-000000000101",
        destinationId: merbabu.id,
        name: "Suwanting",
        basecampName: "Basecamp Suwanting",
        estimatedUpHours: 6,
        estimatedDownHours: 4,
        difficultyLevel: "MODERATE",
        hasWaterSource: false,
        campAvailable: true,
        notes: "Initial sample route. Verify latest basecamp information before trip.",
      },
      {
        id: "00000000-0000-4000-8000-000000000102",
        destinationId: merbabu.id,
        name: "Thekelan",
        basecampName: "Basecamp Thekelan",
        estimatedUpHours: 7,
        estimatedDownHours: 5,
        difficultyLevel: "MODERATE",
        hasWaterSource: false,
        campAvailable: true,
        notes: "Initial sample route. Verify latest basecamp information before trip.",
      },
    ],
    skipDuplicates: true,
  });

  await prisma.gearItem.createMany({
    data: [
      { name: "Carrier", category: "Bag", type: "PERSONAL", priority: "REQUIRED" },
      { name: "Headlamp", category: "Lighting", type: "PERSONAL", priority: "REQUIRED" },
      { name: "Sleeping bag", category: "Sleeping", type: "PERSONAL", priority: "REQUIRED" },
      { name: "Tent", category: "Shelter", type: "GROUP", priority: "REQUIRED" },
      { name: "Portable stove", category: "Cooking", type: "GROUP", priority: "RECOMMENDED" },
    ],
    skipDuplicates: true,
  });
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
