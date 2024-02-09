import { client } from "../client";


export default async function removeProduct (name) {

  const db = client.db('store')

  
  await db.collection('items').deleteOne(
    {name : name}
  )
}