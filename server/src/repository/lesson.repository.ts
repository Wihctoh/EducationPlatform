import { pool } from "../db";
import { iLesson } from "../interfaces";

async function getAllLessonDB(): Promise<iLesson[]> {
  const client = await pool.connect();

  const sql = "select * from lessons";
  const data = (await client.query(sql)).rows;

  await client.release();

  return data;
}

async function getLessonByIdDB(id: number): Promise<iLesson[]> {
  const client = await pool.connect();

  const sql = "select * from lessons where course_id = $1";
  const data = (await client.query(sql, [id])).rows;

  await client.release();

  return data;
}

async function createLessonDB(course_id: number, title: string): Promise<iLesson[]> {
  const client = await pool.connect();

  try {
    await client.query("begin");

    const sql = "insert into lessons (course_id, title) values ($1, $2) returning *";
    const data = (await client.query(sql, [course_id, title])).rows;

    await client.query("commit");
    await client.release();

    return data;
  } catch (error: any) {
    await client.query("rollback");
    console.log(`createLessonDB: ${error.message}`);

    return [];
  }
}

async function updateLessonDB(id: number, course_id: number, title: string): Promise<iLesson[]> {
  const client = await pool.connect();

  try {
    await client.query("begin");

    const sql = "update lessons set course_id = $1, title = $2  where id = $3 returning *";
    const data = (await client.query(sql, [course_id, title, id])).rows;

    await client.query("commit");
    await client.release();

    return data;
  } catch (error: any) {
    await client.query("rollback");
    console.log(`updateLessonDB: ${error.message}`);

    return [];
  }
}

async function deleteLessonDB(id: number): Promise<iLesson[]> {
  const client = await pool.connect();

  try {
    await client.query("begin");

    const sql = "delete from lessons where id = $1 returning *";
    const data = (await client.query(sql, [id])).rows;

    await client.query("commit");
    await client.release();

    return data;
  } catch (error: any) {
    await client.query("rollback");
    console.log(`deleteLessonDB: ${error.message}`);

    return [];
  }
}

export { getAllLessonDB, createLessonDB, updateLessonDB, deleteLessonDB, getLessonByIdDB };
