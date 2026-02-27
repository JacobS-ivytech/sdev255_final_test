// Required for interactivity like forms and state
import { getPrisma } from "@/lib/prisma";



export default async function Home() {
  const prisma = getPrisma();
  const courses = await prisma.course.findMany();

  return (
    <div className="flex justify-center items-center p-24 font-wolverine text-2xl">

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
    </div>
  );
}


