import { client } from "./client"

export default async function addToCart(products, username){
  const db = client.db('store')

  const addtocard = await db.collection('cart').insertOne(
    {...products, username: username}
    
  )

  return addtocard
}