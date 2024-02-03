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
    },

  ]).toArray()

  const removeId = getdata.map((item) => {
    const { _id, ...data } = item
    return data
  })

  return removeId
}

export const getCartItems = async function(user){

  const db = client.db('user')

  const cartItems = await db.collection('cart').aggregate([
    {$match:{user: user} },
    {$project : {name: 1, price: 1, image: 1, username: 1, qty: 1} }
  ]).toArray()

  const removeId = cartItems.map((items) => {
    const { _id, ...data } = items
    return data
  })

  return removeId
}