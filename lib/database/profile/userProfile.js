import hashInput from "../auth/encrypt";
import { client } from "../client";


export default async function UserProfile(user, image, password) {

  const db = client.db('auth')

  if (password) {

    const hashedPassword = await hashInput(password)
    
    await db.collection('users').updateOne(
      { email: user },
      {
        $set: { password: hashedPassword }
      }
    )
  }

  if (image) {
    await db.collection('users').updateOne(
      { email: user },
      {
        $set: { image: image }
      }
    )
  }
}