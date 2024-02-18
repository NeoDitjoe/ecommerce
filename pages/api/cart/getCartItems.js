import { getCartItems } from "@/lib/database/getItems"


export default async function handler(req, res){
  if(req.method === 'GET'){

    const { user } = req.query

    try{
      const results = await getCartItems(user, res)
      res.status(200).json({ results })
    }catch(error){
      res.status(417).json({ message: 'Check your internet connection' })
    }
  }
}