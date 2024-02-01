import { client } from "./client"

export default async function addToCart(products){
  const db = client.db('store')

  const addtocard = await db.collection('cart').insertOne(
    {...products}
  )

  return addtocard
}