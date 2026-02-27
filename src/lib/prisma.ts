import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

export const getPrisma = () => {
  if (!globalForPrisma.prisma) {
    // 1. Create a connection pool using your Supabase URL
    const pool = new Pool({ connectionString: process.env.DATABASE_URL });

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
