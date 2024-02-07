import { client } from "../client";

export default async function addNewProduct({products}){

  const db = client.db('store')

  await db.collection('item').insertOne(
    {...products}
  )
} 