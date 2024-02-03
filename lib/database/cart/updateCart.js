import { client } from "../client"

export default async function updateCart(user, name, qty){

  const db = client.db('user')

  await db.collection('cart').updateOne(
    {
      user: user,
      name: name
    }, 
    {
      $set:{
        qty : qty
      }
    }
  )
}