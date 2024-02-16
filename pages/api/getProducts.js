import getItem from "@/lib/database/getItems"

export default async function handler(req, res) { 

  if(req.method === 'GET'){

    try {
      const results = await getItem()
      res.status(200).json({ results})
    } catch (error) {
      res.status(500).json({ message: 'failed!'})
    }
  }
}