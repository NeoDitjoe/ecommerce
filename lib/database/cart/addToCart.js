import { client } from "../client"

export default async function addToCart(products, userEmail){
  const db = client.db('user')

  const addtocard = await db.collection('cart').insertOne(
    {...products, user: userEmail, qty : 1}
  )

  return addtocard
}