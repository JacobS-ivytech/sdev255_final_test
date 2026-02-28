import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg"

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter
  });

    // 2. Initialize the Prisma Postgres adapter
    const adapter = new PrismaPg(pool);

    // 3. Pass the adapter into the Prisma Client constructor
    globalForPrisma.prisma = new PrismaClient({
      adapter, // <-- This is the magic word the compiler is looking for
      log: ["query", "error", "warn"],
    });
  }
  return globalForPrisma.prisma;
};
