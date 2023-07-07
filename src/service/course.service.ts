import {
  getAllUsersCoursesDB,
  createCourseDB,
  getUserIDCoursesDB,
  deleteCourseDB,
} from "../repository/course.repository";
import { iCourse } from "../interfaces";

async function getAllUsersCourses(): Promise<iCourse[]> {
  const data = await getAllUsersCoursesDB();

  if (!data.length) throw new Error("no data");

  return data;
}

async function createCourse(course: string): Promise<iCourse[]> {
  const data = await createCourseDB(course);

  return data;
}

async function getUserIDCourses(id: number): Promise<iCourse[]> {
  const data = await getUserIDCoursesDB(id);

  return data;
}

async function deleteCourse(id: number): Promise<iCourse[]> {
  const data = await deleteCourseDB(id);

  return data;
}

export { getAllUsersCourses, createCourse, getUserIDCourses, deleteCourse };
