import { pool } from "../db";
import { iUser } from "../interfaces";

async function createUserDB(
  name: string,
  surname: string,
  email: string,
  pwd: string
): Promise<iUser[]> {
  const client = await pool.connect();

  try {
    await client.query("begin");

    const sql =
      "insert into users (name, surname, email, pwd) values ($1, $2, $3, $4) returning *";
    const data = (await client.query(sql, [name, surname, email, pwd])).rows;

    await client.query("commit");

    return data;
  } catch (error: any) {
    await client.query("rollback");
    console.log(`createUserDB: ${error.message}`);

    return [];
  }
}

async function getEmailDB(email: string): Promise<iUser[]> {
  const client = await pool.connect();

  const sql = "select * from users where email = $1";
  const data = (await client.query(sql, [email])).rows;

  return data;
}

async function deleteUserTestDB(id: number): Promise<iUser[]> {
  const client = await pool.connect();

  try {
    await client.query("begin");

    const sql = "delete from users where id = $1 returning *";
    const data = (await client.query(sql, [id])).rows;

    await client.query("commit");

    return data;
  } catch (error: any) {
    await client.query("rollback");
    console.log(`deleteUserDB: ${error.message}`);

    return [];
  }
}

export { createUserDB, getEmailDB, deleteUserTestDB };
