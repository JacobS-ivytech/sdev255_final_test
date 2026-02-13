import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-slate-900 text-white">
      <h1 className="text-2xl font-bold mb-6 text-yellow-400">
        Course Management - Xaviers School for the Gifted
      </h1>

      <h2 className="text-xl mb-4 text-yellow-400">Add a Course</h2>
      <div className="w-full max-w-md">
        <form id="courseForm" className="flex flex-col gap-4">
          <label className="text-sm font-semibold text-yellow-400">
            Course Name:
          </label>
          <input
            id="name"
            placeholder="pleae provide the name of the course"
            className="border border-yellow-400 p-2 rounded text-xl"
            required
          />
          <label className="text-sm font-semibold text-yellow-400">
            Course Description:
          </label>
          <textarea
            id="description"
            placeholder="please provde a course description"
            className="border border-yellow-400 p-2 rounded text-xl"
            required
          ></textarea>
          <label className="text-sm font-semibold text-yellow-400">
            Subject Area:
          </label>
          <input
            id="subject-area"
            placeholder="subject Area of the course"
            className="border border-yellow-400 p-2 rounded text-xl"
            required
          />
          <label className="text-sm font-semibold text-yellow-400">
            Credits
          </label>
          <input
            id="credits"
            type="number"
            placeholder="provide the number of course credits"
            className="border border-yellow-400 p-2 rounded text-xl"
            required
          />
          <button className=" bg-yellow-400 text-black font-bold py-2 rounded-md hover:bg-yellow-300 transition ease-in delay-100 hover:translate-y-1">
            Add Course
          </button>
        </form>
      </div>
      <h2 className="text-xl mt-8 text-yellow-400">All Courses</h2>
      <div id="courses"></div>
    </main>
  );
}
