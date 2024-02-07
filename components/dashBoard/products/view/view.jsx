import { Item } from "../../muiStyle"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import style from './view.module.css'
import Image from "next/image";

export default function View(props) {

  const { product } = props

  return (
    <div className={style.main}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>

          <Grid xs={12} md={4} s={2} >
            <Item>
              <div className={style.imgDiv}>
                <Image 
                  src = {product && product.image}
                  width={300}
                  height={300}
                  className={style.img}
                />
              </div>
            </Item>
          </Grid>

          <Grid xs={12} md={4} s={2} >
            <Item>
              <h5>Name:</h5>
              <p>{product &&product.name}</p>
            </Item>
            <Item>
              <h5>Price:</h5>
              <p>{product &&product.price.toFixed(2)}</p>
            </Item>
            <Item>
              <h5>category:</h5>
              <p>{product &&product.category}</p>
            </Item>
            <Item>
              <h5>Brand:</h5>
              <p>{product &&product.brand}</p>
            </Item>
          </Grid>

          <Grid xs={12} md={4} s={2} >
            <Item>
              <h5>rating</h5>
              <p>{product &&product.rating}</p>
            </Item>
            <Item>
              <h5>Reviews No.</h5>
              <p>{product &&product.reviewsCount}</p>
            </Item>
            <Item>
              <h5>Stock No.</h5>
              <p>{product &&product.stock}</p>
            </Item>
            <Item>
              <h5>category</h5>
              <p>{product &&product.categoryList.join(', ')}</p>
            </Item>
          </Grid>

          <Grid xs={12} md={8} s={2} >
            <Item>
              <h5>description:</h5>
              <p>{product &&product.description}</p>
            </Item>
          </Grid>

          <Grid xs={12} md={4} s={2} >
            <Item>
              <button
                className={style.button}
              >Edit Product</button>
            </Item>
          </Grid>

        </Grid>
      </Box>
    </div>
  )
}

