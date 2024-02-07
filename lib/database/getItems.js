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
        price: 1,
        _id: 1
      }
    },

  ]).toArray()

  const items = getdata.map((item) => (

    {...item, _id: item._id.toString()}
  ))

  return items
}
const dbUser = client.db('user')

export const getCartItems = async function(user){


  const cartItems = await dbUser.collection('cart').aggregate([
    {$match:{user: user} },
    {$project : {name: 1, price: 1, image: 1, username: 1, qty: 1, _id: 0} }
  ]).toArray()

  return cartItems
}
