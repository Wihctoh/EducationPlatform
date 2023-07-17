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

async function createCourse(course: string): Promise<iCourse[]> {
  const data = await createCourseDB(course);

  if (!data.length) throw new Error("cant create user!");

  return data;
}

async function getUserIDCourses(id: number): Promise<iCourse[]> {
  const data = await getUserIDCoursesDB(id);

  if (!data.length) throw new Error("no have user!");

  return data;
}

async function deleteCourse(id: number): Promise<iCourse[]> {
  const data = await deleteCourseDB(id);

  if (!data.length) throw new Error("cant delete user!");

  return data;
}

async function updateCourse(id: number, course: string): Promise<iCourse[]> {
  const data = await updateCourseDB(id, course);

  if (!data.length) throw new Error("cant update user!");

  return data;
}

export {
  getAllUsersCourses,
  createCourse,
  getUserIDCourses,
  deleteCourse,
  updateCourse,
};
