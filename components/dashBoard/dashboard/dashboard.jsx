import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { dummyUsers } from '@/lib/dummyData';
import style from './dashboard.module.css'
import Image from 'next/image';
import { Item } from '../muiStyle';
import { BarChart, Bar, Tooltip, LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { useState } from 'react';
const data = [{ name: 'Nov', uv: 100, pv: 1400, amt: 2400 }, { name: 'Dec', uv: 360, pv: 1000, amt: 2400 }, { name: 'Jan', uv: 200, pv: 1200, amt: 2400 }, { name: 'Feb', uv: 220, pv: 1600, amt: 2400 }];

export default function Dashboard() {

  const [chart, setChart] = useState(false)

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>

          <Grid xs={12} md={3} s={2} >
            <Item style={{ background: 'rgb(27, 27, 42)' }}>
              <p className={style.priceTitle}>Total sells</p>

              <div className={style.priceAction}>
                <div>
                  <h3>R {'12 072.59'}</h3>
                </div>

                <div>
                  <p className={style.priceUp}>18.9%</p>
                  <p>compared to Jan 2024</p>
                </div>
              </div>
            </Item>
          </Grid>

          <Grid xs={12} md={3} s={2} >
            <Item style={{ background: 'rgb(27, 27, 42)' }}>
              <p className={style.priceTitle}>Average order value</p>

              <div className={style.priceAction}>
                <div>
                  <h3>R {'1364.90'}</h3>
                </div>

                <div>
                  <p className={style.priceDown}>28.9%</p>
                  <p>compared to Jan 2024</p>
                </div>
              </div>
            </Item>
          </Grid>

          <Grid xs={12} md={3} s={2} >
            <Item style={{ background: 'rgb(27, 27, 42)' }}>
              <p className={style.priceTitle}>Total orders</p>

              <div className={style.priceAction}>
                <div>
                  <h3>R {'386'}</h3>
                </div>

                <div>
                  <p className={style.priceDown}>24.0%</p>
                  <p >compared to Jan 2024</p>
                </div>
              </div>
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
                    dummyUsers.map((user, index) => (
                      <tr key={index}>
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
                        <td>R {user.amount}</td>
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

              <button
                onClick={() => setChart(!chart)}
                className={style.button}
              >{chart ? 'Line chart' : 'Bar chart'}</button>

              {chart
                ?

                <BarChart width={600} height={300} data={data}>
                  <XAxis dataKey="name" stroke="#8884d8" />
                  <YAxis />
                  <Tooltip />
                  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                  <Bar dataKey="uv" fill="#8884d8" barSize={30} />
                  <Bar dataKey="pv" fill="#8884d8" barSize={30} />
                  <Tooltip />
                </BarChart>

                :

                <LineChart width={600} height={300} data={data}>
                  <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                  <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                  <CartesianGrid stroke="#ccc" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                </LineChart>
              }
            </Item>

          </Grid>

        </Grid>
      </Box>
    </div>
  )
}