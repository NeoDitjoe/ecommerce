import { client } from "./client";

export default async function getItem() {

  const db = client.db('store')
  const getdata = await db.collection('items').aggregate([]).toArray()

  const items = getdata.map((item) => (

    { ...item, _id: item._id.toString() }
  ))


  return items
}

export const getCartItems = async function (user, res) {

  const db = client.db('user')

  let cartItems

  try {
    cartItems = await db.collection('cart').aggregate([
      { $match: { user: user } },
      { $project: { name: 1, price: 1, image: 1, username: 1, qty: 1, _id: 0, imgFile: 1 } }
    ]).toArray()
  } catch (error) {
    res.status(500).json({ message: 'failedto get cart Items' })
  }

  return cartItems
}