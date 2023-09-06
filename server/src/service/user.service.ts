import {
  getAllUsersDB,
  getUserByIdDB,
  updateUserDB,
  deleteUserDB,
  createUserTestDB,
} from "../repository/user.repository";
import { iUser } from "../interfaces";

async function getAllUsers(): Promise<iUser[]> {
  const data = await getAllUsersDB();

  if (data.length === 0) throw new Error("no data!");

  return data;
}

async function getUserById(id: number): Promise<iUser[]> {
  const data = await getUserByIdDB(id);

  if (data.length === 0) throw new Error("no data!");

  return data;
}

async function updateUser(
  id: number,
  name: string,
  surname: string,
  email: string,
  pwd: string
): Promise<iUser[]> {
  const data = await updateUserDB(id, name, surname, email, pwd);

  return data;
}

async function deleteUser(id: number): Promise<iUser[]> {
  const data = await deleteUserDB(id);

  if (data.length === 0) throw new Error("no data!");

  return data;
}

async function createUserTest(
  name: string,
  surname: string,
  email: string,
  pwd: string
): Promise<iUser[]> {
  const data = await createUserTestDB(name, surname, email, pwd);

  if (data.length === 0) throw new Error("cant create test user!");

  return data;
}

export { getAllUsers, getUserById, updateUser, deleteUser, createUserTest };
