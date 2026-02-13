import { PrismaClient } from "@src/app/generated/prisma/client"

export const prisma = new PrismaClient({
    adapter: process.env.DATABASE_URL
});