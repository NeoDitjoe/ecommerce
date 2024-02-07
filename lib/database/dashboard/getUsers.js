import { client } from "../client";


export default async function getUsers() {
  const db = client.db('auth')

  const results = await db.collection('users').aggregate([
    { $limit: 7 }
  ]).toArray()

  const users = results.map((user) =>(
   { ...user, _id : user._id.toString(), createdAt: user.createdAt.toString()}
  ))

  return users
}