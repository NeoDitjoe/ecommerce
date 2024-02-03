import { hash } from "bcryptjs";

export default async function hashPassword(password){
  const encrypt = await hash(password, 15)

  return encrypt
}