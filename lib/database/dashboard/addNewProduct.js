import { client } from "../client";

export default async function addNewProduct(products){

  const db = client.db('store')

  await db.collection('items').insertOne(
    {...products, createdAt: new Date()}
  )
} 