import addNewProduct from "@/lib/database/dashboard/addNewProduct"

export default async function handle(req, res){

  if(req.method === 'POST'){

    const { addData } = req.body

    try {
      await addNewProduct(addData)
      res.status(200).json({ message: 'successfully added new product'})
    } catch (error) {
      res.status(417).json({ message: 'failed to add products'})
    }
  }
}