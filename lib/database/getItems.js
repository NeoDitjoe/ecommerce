import { client } from "./client";

export default async function getItem() {

  const db = client.db('store')
  const getdata = await db.collection('items').aggregate([]).toArray()

  const items = getdata.map((item) => (

    {...item, _id: item._id.toString()}
  ))

  return items
}

export const getCartItems = async function(user){
  
  const db = client.db('user')

  const cartItems = await db.collection('cart').aggregate([
    {$match:{user: user} },
    {$project : {name: 1, price: 1, image: 1, username: 1, qty: 1, _id: 0, imgFile: 1} }
  ]).toArray()

  return cartItems
}