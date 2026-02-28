import { getPrisma } from "@/lib/prisma";
import { deleteCourse } from "./actions";

export default async function CourseList() {
  const prisma = getPrisma();
  const courses = await prisma.course.findMany();

  return (
    <div id="courses" className="mt-4 grid grid-cols-1 gap-4 w-full max-w-md">
      {courses.length === 0 ? (
        <p className="italic text-slate-400">No courses loaded yet.</p>
      ) : (
        courses.map((course) => (
          <div
            key={course.courseId}
            className="border border-yellow-400 p-4 rounded text-yellow-400 bg-slate-800"
          >
            <div className="flex justify-between items-start">
            <h3 className="text-lg font-bold">{course.className}</h3>
            <form action={async () => {
              "use server";
              await deleteCourse(course.courseId)
            }}>
              <button className="text-xs bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 transtion">Delete</button>

            </form>
            </div>
            <p className="text-sm">{course.description}</p>
            <div className="flex justify-between mt-2 text-xs">
              <span>Subject: {course.subject}</span>
              <span>Credits: {course.creditHours}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
