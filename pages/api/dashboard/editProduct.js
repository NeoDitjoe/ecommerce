import editProduct from "@/lib/database/dashboard/editProduct"

export default async function  handler(req, res){

  if( req.method === 'POST'){

    const { product } = req.body

    try {
      await editProduct(product)
      res.status(200).json({ message: 'success'})
    } catch (error) {
      res.status(417).json({ message: 'failed to edit product, check your internet connection'})
    }
  }
}