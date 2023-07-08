import { pool } from "../db";
import { iCourse } from "../interfaces";

async function getAllUsersCoursesDB(): Promise<iCourse[]> {
  const client = await pool.connect();

  const sql = "select * from courses";
  const data = (await client.query(sql)).rows;

  return data;
}

async function getUserIDCoursesDB(id: iCourse[]): Promise<iCourse[]> {
  const client = await pool.connect();

  const sql = "select * from courses where id = $1";
  const data = (await client.query(sql, [id])).rows;

  return data;
}

async function createCourseDB(course: iCourse[]): Promise<iCourse[]> {
  const client = await pool.connect();

  const sql = "insert into courses (course) values ($1) returning *";
  const data = (await client.query(sql, [course])).rows;

  return data;
}

async function deleteCourseDB(id: iCourse[]): Promise<iCourse[]> {
  const client = await pool.connect();

  const sql = "delete from courses where id = $1 returning *";
  const data = (await client.query(sql, [id])).rows;

  return data;
}

async function updateCourseDB(
  id: iCourse[],
  course: iCourse[]
): Promise<iCourse[]> {
  const client = await pool.connect();

  const sql = "update courses set course = $1 where id = $2 returning *";
  const data = (await client.query(sql, [course, id])).rows;

  return data;
}

export {
  getAllUsersCoursesDB,
  createCourseDB,
  getUserIDCoursesDB,
  deleteCourseDB,
  updateCourseDB,
};
