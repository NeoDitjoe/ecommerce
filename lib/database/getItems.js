import { client } from "./client";

export default async function getItem() {

  const db = client.db('store')

  const getdata = await db.collection('items').aggregate([

    {
      $project: {
        name: 1,
        image: 1,
        slug: 1,
        brand: 1,
        price: 1
      }
    }

  ]).toArray()

  const removeId = getdata.map((item) => {
    const { _id, ...data } = item
    return data
  })

  return removeId
}