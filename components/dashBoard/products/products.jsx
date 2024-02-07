import { Item } from "../muiStyle"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import style from './products.module.css'
import { dummyUsers } from "@/lib/dummyData";
import Image from "next/image";

export default function Products() {

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
                    <td>Action</td>
                  </tr>
                </thead>
                <tbody>
                  {
                    dummyUsers.map((user, index) => (
                      <tr key={index}>
                        <td className={style.imgAndName}>
                          <Image
                            src={user.image}
                            className={style.img}
                            alt={user.email}
                            width={200}
                            height={200}
                          />
                          <p>{user.name}</p>
                        </td>

                        <td>{user.status}</td>
                        <td>{user.email}</td>
                        <td>{user.date}</td>
                        <td>{user.status}</td>
                        <td>
                            dd
                        </td>
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