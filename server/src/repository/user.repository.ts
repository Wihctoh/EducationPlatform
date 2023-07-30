import { pool } from "../db";
import { iUser } from "../interfaces";

async function getAllUsersDB(): Promise<iUser[]> {
  const client = await pool.connect();

  const sql = "select * from users";
  const data = (await client.query(sql)).rows;

  return data;
}

async function getUserByIdDB(id: number): Promise<iUser[]> {
  const client = await pool.connect();

  const sql = "select * from users where id = $1";
  const data = (await client.query(sql, [id])).rows;

  return data;
}

async function updateUserDB(
  id: number,
  name: string,
  surname: string,
  email: string,
  pwd: string
): Promise<iUser[]> {
  const client = await pool.connect();

  try {
    await client.query("begin");

    const sql =
      "update users set name = $2, surname = $3, email = $4, pwd = $5 where id = $1 returning *";
    const data = (await client.query(sql, [id, name, surname, email, pwd]))
      .rows;

    await client.query("commit");

    return data;
  } catch (error: any) {
    await client.query("rollback");
    console.log(`updateUserDB: ${error.message}`);

    return [];
  }
}

async function deleteUserDB(id: number): Promise<iUser[]> {
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

async function cteateUserTestDB(
  name: string,
  surname: string,
  email: string,
  pwd: string
): Promise<iUser[]> {
  const client = await pool.connect();

  try {
    await client.query("begin");

    const sql =
      "insert into users (name, surname, email, pwd) values ($1, $2 ,$3, $4) returning *";
    const data = (await client.query(sql, [name, surname, email, pwd])).rows;

    await client.query("commit");

    return data;
  } catch (error: any) {
    await client.query("rollback");
    console.log(`cteateUserTestDB ${error.message}`);

    return [];
  }
}

export {
  getAllUsersDB,
  getUserByIdDB,
  updateUserDB,
  deleteUserDB,
  cteateUserTestDB,
};
