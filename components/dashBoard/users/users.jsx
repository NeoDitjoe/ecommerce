import { Item } from "../muiStyle"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import style from './users.module.css'
import Image from "next/image";
import profile from '../../../public/profile.png'

export default function Users(props) {

  const { users } = props
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>

          <Grid xs={12} md={12} s={2} >
            <Item style={{ background: 'rgb(27, 27, 42)' }}>

              <table className={style.table}>
                <thead>
                  <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Created At</td>
                    <td>Role</td>
                    <td>Status</td>
                  </tr>
                </thead>
                <tbody>
                  {
                    users && users.map((user, index) => (
                      <tr key={index}>
                        <td className={style.imgAndName}>
                          <Image
                            src={user.image ? user.image : profile }
                            className={style.img}
                            alt={user.email}
                            width={200}
                            height={200}
                          />
                          <p>{user.username}</p>
                        </td>

                        <td>{user.email}</td>
                        <td>{user.createdAt}</td>
                        <td>{user.role ? user.role : 'user'}</td>
                        <td>active</td>
                      </tr>
                    ))
                  }

                </tbody>
              </table>
            </Item>
          </Grid>

        </Grid>
      </Box>
    </div>
  )
}