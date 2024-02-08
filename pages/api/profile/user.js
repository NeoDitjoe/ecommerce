import UserProfile from "@/lib/database/profile/userProfile"


export default async function handler(req, res){

  if(req.method === 'POST'){
    const { userEmail, image} = req.body

    try {
      await UserProfile(userEmail, image)
      res.status(200).json({ message: 'success' })
    } catch (error) {
      res.status(417).json({ message: 'failed attempt' })
    }
  }
}