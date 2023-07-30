import { pool } from "../db";
import { iCourse } from "../interfaces";

async function getAllUsersCoursesDB(): Promise<iCourse[]> {
  const client = await pool.connect();

  const sql = "select * from courses";
  const data = (await client.query(sql)).rows;

  return data;
}

async function getUserIDCoursesDB(id: number): Promise<iCourse[]> {
  const client = await pool.connect();

  const sql = "select * from courses where id = $1";
  const data = (await client.query(sql, [id])).rows;

  return data;
}

async function createCourseDB(course: string): Promise<iCourse[]> {
  const client = await pool.connect();

  try {
    await client.query("begin");

    const sql = "insert into courses (course) values ($1) returning *";
    const data = (await client.query(sql, [course])).rows;

    await client.query("commit");

    return data;
  } catch (error: any) {
    await client.query("rollback");
    console.log(`createCourseDB: ${error.message}`);

    return [];
  }
}

async function deleteCourseDB(id: number): Promise<iCourse[]> {
  const client = await pool.connect();

  try {
    await client.query("begin");

    const sql = "delete from courses where id = $1 returning *";
    const data = (await client.query(sql, [id])).rows;

    await client.query("commit");

    return data;
  } catch (error: any) {
    await client.query("rollback");
    console.log(`deleteCourseDB: ${error.message}`);

    return [];
  }
}

async function updateCourseDB(id: number, course: string): Promise<iCourse[]> {
  const client = await pool.connect();
  try {
    await client.query("begin");

    const sql = "update courses set course = $1 where id = $2 returning *";
    const data = (await client.query(sql, [course, id])).rows;

    await client.query("commit");

    return data;
  } catch (error: any) {
    await client.query("rollback");
    console.log(`updateCourseDB: ${error.message}`);

    return [];
  }
}

export {
  getAllUsersCoursesDB,
  createCourseDB,
  getUserIDCoursesDB,
  deleteCourseDB,
  updateCourseDB,
};
