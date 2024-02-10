import getProfileImg from "@/lib/database/auth/getUserProfileImg"

export default async function handler(req, res) {

  if (req.method === 'GET') {

    const { userEmail } = req.query

    try {
      const img = await getProfileImg(userEmail)
      res.status(200).json({ img })
    } catch (error) {
      res.status(417).json({ message: 'failed to load user profile image'})
    }
  }
}