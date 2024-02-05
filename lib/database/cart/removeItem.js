import { client } from "../client";

export default async function removeItem(userEmail, name){

  const db = client.db('user')

  await db.collection('cart').deleteOne({ user: userEmail, name: name})
}