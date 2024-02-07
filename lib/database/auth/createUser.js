import { client } from "../client"
import hashInput from "./encrypt"

export default async function createUser(username, password, email, res){

  if(username.split('').length < 1){
    res.status(417).json({ message: 'please include username'})
    return
  }

  if(password.split('').length < 9){
    res.status(417).json({ message: 'password should include 8 characters or more'})
    return
  }

  const db = client.db('auth')

  const usernameExist = await db.collection('users').findOne({username: username})
  const emailExist = await db.collection('users').findOne({email: email})

  if(usernameExist){
    res.status(417).json({ message: 'Username is already in use, try to login'})
    return
  }

  if(emailExist){
    res.status(417).json({ message: 'email is already in use, try to login'})
    return
  } 

  const sequrePassword = await hashInput(password)

  await db.collection('users').insertOne({
    username: username,
    email: email,
    password: sequrePassword,
    createdAt: new Date()
  })

  res.status(200).json({ message: 'success'})
}