import addToCart from "@/lib/database/addToCart"

export default async function handler(req, res) {
  if(req.method === 'POST'){
    const { products, username} = req.body

    try {
      await addToCart(products, username)

    } catch(error) {
      res.status(417).json({message: error})
    }

  }
}
