import { compare, hash } from "bcryptjs";

export default async function hashPassword(password){
  const encrypt = await hash(password, 15)

  return encrypt
}

export async function verifyPasword(password, hashedPassword){
  const verify = await compare(password, hashedPassword)

  return verify
}