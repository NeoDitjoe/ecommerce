import updateCart from "@/lib/database/cart/updateCart"

export default async function handler( req, res){

  if(req.method === 'POST'){

    const { user, name, qty } = req.body

    try {
      await updateCart(user, name, qty)
    } catch (error) {
      console.log(error)
    }
  }
}