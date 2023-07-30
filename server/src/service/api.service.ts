import {
  createUserDB,
  getEmailDB,
  deleteUserTestDB,
} from "../repository/api.repository";
import { iUser } from "../interfaces";
import bcrypt from "bcrypt";

const salt = 1;

async function createUser(
  name: string,
  surname: string,
  email: string,
  pwd: string
): Promise<iUser[]> {
  const foundEmail = await getEmailDB(email);
  if (foundEmail.length) throw new Error("no have user!");

  const hashPwd = await bcrypt.hash(pwd, salt);

  const data = await createUserDB(name, surname, email, hashPwd);

  return data;
}

async function authUser(email: string, pwd: string): Promise<iUser[]> {
  const foundUser = await getEmailDB(email);
  if (!foundUser.length) throw new Error("user not found!");

  const bool = await bcrypt.compare(pwd, foundUser[0].pwd);
  if (!bool) throw new Error("pwd not correct!");

  return foundUser;
}

async function deleteUserTest(id: number): Promise<iUser[]> {
  const data = await deleteUserTestDB(id);

  if (!data.length) throw new Error("user cant delete!");

  return data;
}
export { createUser, authUser, deleteUserTest };
