import removeProduct from "@/lib/database/dashboard/removeProducts"


export default async function handler(req, res){
  if(req.method === 'DELETE'){

    const { name } = req.query

    try {
      await removeProduct(name)
      res.status(200).json({message: 'removed product successfully'})
    } catch (error) {
      res.status(417).json({ message: 'failed to remove product'})
    }
  }
}