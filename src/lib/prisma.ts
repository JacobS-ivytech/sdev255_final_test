<<<<<<< HEAD
import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg"
=======
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
>>>>>>> ad87c5b2180255ed1e4540514a28790dfd414a80

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

<<<<<<< HEAD
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter
  });
=======
export const getPrisma = () => {
  if (!globalForPrisma.prisma) {
    // 1. Create a connection pool using your Supabase URL
    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
>>>>>>> ad87c5b2180255ed1e4540514a28790dfd414a80

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
