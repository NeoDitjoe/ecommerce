import { Items } from "../productItem/productItem";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Item } from "../dashBoard/muiStyle";
import View from "./view1stRow.jsx/view";
import style from './home.module.css'


export default function Homepage(props) {

  const { products } = props

  return (

    <main className={style.main}>
      <Box sx={{ flexGrow: 1 }}>

        <Grid container spacing={1} color={'black'}>
          <Grid xs={12} md={4} s={2} >

            <Item>
              <h1 className={style.view}>
                View
              </h1>
            </Item>
          </Grid>

          <Grid xs={12} md={8} s={2} >

            <Item>
              <View />
            </Item>
          </Grid>

          <Grid xs={12} md={12} s={2} >

            <Item>
              <h2 className='lastestProducts'>Latest Products</h2>
              <Items
                products={products}
              />

            </Item>
          </Grid>
        </Grid>


      </Box>
    </main>

  )
}