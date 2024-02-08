import { client } from "../client";


export default async function UserProfile(user, image){

  const db = client.db('auth')

  await db.collection('users').updateOne(
    {email: user},
    {
      $set: {image: image}
    }
  )
}