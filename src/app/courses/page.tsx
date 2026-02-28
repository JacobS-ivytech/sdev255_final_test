export const dynamic = "force-dynamic";
export const runtime = "nodejs";

import CourseList from "./CourseList";
import CourseForm from "./CourseForm";
import { getPrisma } from "@/lib/prisma"; // Import your working Prisma instance

export default async function Courses() {
  const prisma = getPrisma();

  // Fetch the instructors from the database
  // Note: Change 'name' to whatever field your User model uses (e.g., 'email' or 'firstName')
  const instructors = await prisma.user.findMany({
    select: { id: true, name: true },
  });

  return (
    <main className="flex flex-col items-center justify-start min-h-screen p-4 pt-24 text-white font-wolverine">
      <h1 className="text-2xl font-bold mb-6 text-yellow-400 font-wolverine">
        Course Management - Xavier&apos;s School for the Gifted
      </h1>

      <h2 className="text-xl mb-4 text-yellow-400 pt-24">Add a Course</h2>
      {/* Pass the fetched instructors into the form */}
      <CourseForm instructors={instructors} />

      <h2 className="text-xl mt-8 text-yellow-400">All Courses</h2>
      <CourseList />
    </main>
  );
}
