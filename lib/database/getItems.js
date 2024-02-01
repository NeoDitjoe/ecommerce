import { client } from "./client";

const db = client.db('store')

export default async function getItem() {

  const getdata = await db.collection('items').aggregate([

    {
      $project: {
        name: 1,
        image: 1,
        slug: 1,
        brand: 1,
        price: 1
      }
    },

    {$limit : 1}

  ]).toArray()

  const removeId = getdata.map((item) => {
    const { _id, ...data } = item
    return data
  })

  return removeId
}

export const getCartItems = async function(){

  const cartItems = await db.collection('cart').aggregate([

  ]).toArray()

  const removeId = cartItems.map((items) => {
    const { _id, ...data } = items
    return data
  })

  return removeId
}