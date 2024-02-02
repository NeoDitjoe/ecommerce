import { client } from "../client"

export default async function createUser(username, password, email, res){

  if(username.split('').length < 1){
    res.status(417).json({ message: 'please include username'})
    return
  }

  if(password.split('').length < 9){
    res.status(417).json({ message: 'password should include 8 characters or more'})
    return
  }

  if(!email.split('').include('@')){
    res.status(417).json({ message: 'email should include @'})
    return
  }

  const db = client.db('auth')

  const usernameExist = await db.collection('users').findOne({username: username})
  const emailExist = await db.collection('users').findOne({email: email})

  if(usernameExist){
    res.status(417).json({ message: 'Username already in use, try to login'})
    return
  }

  if(emailExist){
    res.status(417).json({ message: 'email already in use, try to login'})
    return
  } 

  await db.collection('users').insertOne({
    username: username,
    email: email,
    password: password
  })

  res.status(200).json({ message: 'success'})
}