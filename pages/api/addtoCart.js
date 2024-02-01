// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import addToCart from "@/lib/database/addToCart"
import { client } from "@/lib/database/client"

export default async function handler(req, res) {
  if(req.method === 'POST'){
    const { products } = req.body

    // const { name } = products

    // try {
    //   await addToCart(name)

    // } catch(error) {
    //   res.status(417).json({message: error})
    // }

    const db = client.db('storage')

    const addtocard = await db.collection('cart').insertOne(
      {...products}
    )
      console.log('products')
    res.status(201).json({ message: 'success'})
  }
}
