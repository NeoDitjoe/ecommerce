import updateCart from "@/lib/database/cart/updateCart"

export default async function handler( req, res){

  if(req.method === 'POST'){

    const { user, name, qty } = req.body

    try {
      await updateCart(user, name, qty)
      res.status(200).json({ message: 'Success'})
    } catch (error) {
      res.status(417).json({ message : 'failed!'})
    }
  }
}