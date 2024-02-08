import addItem from "@/lib/database/addItems"
import { useSession } from "next-auth/react"
import { useRef, useState } from "react"
import { Item } from "../dashBoard/muiStyle"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import style from './userProfile.module.css'

export default function UserProfile() {
  const passwordRef = useRef()
  const [imageFile, setImageFile] = useState(null)
  const [showPassword, setShowPassword] = useState(false)

  const { data: session } = useSession()

  const userEmail = session && session.user.email

  const upload = async function () {
    const password = passwordRef.current.value

    await addItem('/api/profile/user', { userEmail: userEmail && userEmail[0], image: imageFile, password: password })
  }

  function convertToBase64(e) {

    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImageFile(reader.result)
    }
    reader.onerror = error => {
      console.log('Error: ', error)
    }
  }

  return (
    <div className={style.main}>
      <h3>{userEmail && userEmail[1]}</h3>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>

          <Grid xs={12} md={4} s={0} >
            <Item className={style.item}>

              <label>Profile Image file: </label>
              <input type="file" name='image' onChange={convertToBase64} />
              <br />

              <label>Change Password: </label>
              <div className={style.passwordInput}>
                <input type={showPassword ? 'text' : 'password'} name='image' ref={passwordRef} />
                <p onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide': 'Show'} </p>
              </div>
              <br />

              <button className={style.button} onClick={upload} >submit</button>
            </Item>
          </Grid>

        </Grid>
      </Box>

    </div>
  )
}