import { compare, hash } from "bcryptjs";

export default async function hashInput(input){
  const encrypt = await hash(input, 15)

  return encrypt
}

export async function verifyHashed(password, hashedPassword){
  const verify = await compare(password, hashedPassword)

  return verify
}