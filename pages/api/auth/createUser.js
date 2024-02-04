import createUser from "@/lib/database/auth/createUser"

export default async function handler(req, res){
  if(req.method === 'POST'){

    const { username, password, email } = req.body

    try{
      await createUser(username, password, email, res)
      res.status(200).json({ message: 'Success!'})
    }catch(error) {
      res.status(417).json({message: 'Failed! Check your internet connection then try again'})
    }
  }
}