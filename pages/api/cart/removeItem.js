import removeItem from "@/lib/database/cart/removeItem"

export default async function handler( req, res){

  if( req.method === 'POST'){
    
    const { userEmail, name } = req.body

    try {
      await removeItem(userEmail, name)
      res.status(200).json({ message: 'successsfully removed Item'})
    } catch (error) {
      res.status(417).json({ message: 'failed to remove Item'})
    }
  }
}