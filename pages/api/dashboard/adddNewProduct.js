import addNewProduct from "@/lib/database/dashboard/addNewProduct"

export default async function handle(req, res){

  if(req.method === 'POST'){

    const { products } = req.body

    try {
      await addNewProduct(products)
      res.status(200).json({ message: 'successfully added new product'})
    } catch (error) {
      res.status(417).json({ message: 'failed to add products'})
    }
  }
}