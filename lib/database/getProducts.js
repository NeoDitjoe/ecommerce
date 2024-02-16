import { client } from "./client";


export default async function getProducts(){

  const db = client.db('store')
  const results = await db.collection('items').aggregate([]).toArray()

  const removeId = results.map((item) => {
    const { _id, ...items } = item

    return items
  })

  return removeId

}