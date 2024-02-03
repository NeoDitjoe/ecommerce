import addToCart from "@/lib/database/cart/addToCart"

export default async function handler(req, res) {
  if(req.method === 'POST'){
    const { products, userEmail} = req.body

    try {
      await addToCart(products, userEmail)

    } catch(error) {
      res.status(417).json({message: error})
    }

  }
}

