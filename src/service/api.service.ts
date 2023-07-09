import { createUserDB, getEmailDB } from "../repository/api.repository";
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

  const hashPwd = await bcrypt.hash(email, salt);

  const data = await createUserDB(name, surname, email, hashPwd);

  return data;
}

export { createUser };
