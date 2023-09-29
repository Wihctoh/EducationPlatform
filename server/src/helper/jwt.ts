import jwt from "jsonwebtoken";

export default function createToken(user: any) {
  const token = jwt.sign(user[0], "Key");

  return token;
}
