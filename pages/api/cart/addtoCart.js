import addToCart from "@/lib/database/cart/addToCart"

export default async function handler(req, res) {
  if(req.method === 'POST'){
    const { products, userEmail} = req.body

    try {
      await addToCart(products, userEmail)
      res.status(200).json({ message: 'Success!'})
    } catch(error) {
      res.status(417).json({message: 'attempt failed!'})
    }

  }
}

