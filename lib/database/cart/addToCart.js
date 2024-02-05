import { client } from "../client"

export default async function addToCart(products, userEmail){
  const db = client.db('user')

  const { name } = products

  const productExist = await db.collection('cart').findOne({ name: name })

  if(productExist){
    await db.collection('cart').updateOne(
      {
        user: userEmail,
        name: name
      }, 
      {
        $set:{
          qty : productExist.qty + 1
        }
      }
    )
  }else{
    const addtocard = await db.collection('cart').insertOne(
      {...products, user: userEmail, qty : 1}
    )
  }

}