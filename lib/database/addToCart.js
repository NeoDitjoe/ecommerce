import {client} from "./client";

export default async function addToCart(name){
  const db = client.db('storage')

  const addtocard = await db.collection('cart').insertOne(
    {name}
  ).toFind()

  return addToCart
}