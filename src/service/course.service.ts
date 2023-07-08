import {
  getAllUsersCoursesDB,
  createCourseDB,
  getUserIDCoursesDB,
  deleteCourseDB,
  updateCourseDB,
} from "../repository/course.repository";
import { iCourse } from "../interfaces";

async function getAllUsersCourses(): Promise<iCourse[]> {
  const data = await getAllUsersCoursesDB();

  if (!data.length) throw new Error("no data");

  return data;
}

async function createCourse(course: iCourse[]): Promise<iCourse[]> {
  const data = await createCourseDB(course);

  return data;
}

async function getUserIDCourses(id: iCourse[]): Promise<iCourse[]> {
  const data = await getUserIDCoursesDB(id);

  return data;
}

async function deleteCourse(id: iCourse[]): Promise<iCourse[]> {
  const data = await deleteCourseDB(id);

  return data;
}

async function updateCourse(
  id: iCourse[],
  course: iCourse[]
): Promise<iCourse[]> {
  const data = await updateCourseDB(id, course);

  return data;
}

export {
  getAllUsersCourses,
  createCourse,
  getUserIDCourses,
  deleteCourse,
  updateCourse,
};
