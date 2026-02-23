"use client"; // Required for interactivity like forms and state

import { useState } from "react";

export default function Home() {
  // You can use state to manage the courses once you fetch them

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setStatus("Saving course...");

  //   // Logic to call your API route would go here
  //   // Example: const response = await fetch('/api/courses', { ... });
  // };

  return <h1 className="p-24 flex justify-center items-center font-wolverine text-yellow-500 text-2xl">Please use the Courses section to manage the courses.</h1>;
}
