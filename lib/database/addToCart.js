import { client } from "./client"

export default async function addToCart(products, userEmail){
  const db = client.db('store')

  const addtocard = await db.collection('cart').insertOne(
    {...products, user: userEmail}
    
  )

  return addtocard
}