"use server";

import { getPrisma } from "@/lib/prisma"; // Update import
import { revalidatePath } from "next/cache";

const prisma = getPrisma(); 
export async function createCourse(formData: FormData) {
  // Initialize it here!

  const className = formData.get("nameOfClass") as string;
  const description = formData.get("description") as string;
  const subject = formData.get("subject") as string;
  const creditHours = parseInt(formData.get("creditHours") as string);
  const instructorId = parseInt(formData.get("instructorId") as string);

  await prisma.course.create({
    data: { className, description, subject, creditHours, instructorId },
  });

  revalidatePath("/courses");
}

export async function deleteCourse(id: number) {
 
  try {
    await prisma.course.delete({
      where: {
        courseId: id,
      },
    });
    revalidatePath("/courses");
  } catch (error) {
    return { error: "Failed to delete the course."}
  }
}