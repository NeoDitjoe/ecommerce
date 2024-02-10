import { client } from "../client";

export default async function getProfileImg(email){

  const db = client.db('auth')

  const response = await db.collection('users').aggregate([
    { $match: { email: email} },
    { $project: { image: 1, _id: 0 }}

  ]).toArray()

  return response
}