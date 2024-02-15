import { client } from "../client";

export default async function addNewProduct(products){

  const db = client.db('store')

  const date = new Date()
  const stringDate = date.toString()

  await db.collection('items').insertOne(
    {...products, createdAt: stringDate}
  )
} 