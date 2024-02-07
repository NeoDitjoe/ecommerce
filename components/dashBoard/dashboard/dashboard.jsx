import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { dummyUsers } from '@/lib/dummyData';
import style from './dashboard.module.css'
import Image from 'next/image';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  background: 'none',
  boxShadow: 'none',
  color: 'white'
}));

export default function Dashboard() {

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>

          <Grid xs={12} md={3} s={2} >
            <Item style={{ background: 'rgb(27, 27, 42)' }}>
              one
            </Item>
          </Grid>

          <Grid xs={12} md={3} s={2} >
            <Item style={{ background: 'rgb(27, 27, 42)' }}>
              two
            </Item>

          </Grid>

          <Grid xs={12} md={3} s={2} >
            <Item style={{ background: 'rgb(27, 27, 42)' }}>
              three
            </Item>
          </Grid>

          <Grid xs={12} md={9} s={2} >
            <Item style={{ background: 'rgb(27, 27, 42)' }}>

              <table className={style.table}>
                <thead>
                  <tr>
                    <td></td>
                    <td>Name</td>
                    <td>Status</td>
                    <td>Date</td>
                    <td>Amount</td>
                    <td>Email</td>
                  </tr>
                </thead>
                <tbody>
                  {
                    dummyUsers.map((user) => (
                      <tr>
                        <td>
                          <Image 
                            src={user.image}
                            className={style.img}
                            alt={user.email}
                            width={200}
                            height={200}
                          />
                          
                        </td>
                        <td>{user.name}</td>
                        <td>{user.status}</td>
                        <td>{user.date}</td>
                        <td>{user.amount}</td>
                        <td>{user.email}</td>
                      </tr>
                    ))
                  }
                
                </tbody>
              </table>
            </Item>
          </Grid>

          <Grid xs={12} md={9} s={2} >
            <Item style={{ background: 'rgb(27, 27, 42)' }}>
              chart
            </Item>
          </Grid>

        </Grid>
      </Box>
    </div>
  )
}