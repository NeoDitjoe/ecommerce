import { Fragment } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image';
import style from './productDetails.module.css'
import AddToCart from '@/components/cart/addToCart';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: 'white',
  background: 'transparent',
  boxShadow: 'none',
}));

export default function ProductDetails(props) {

  const { 
    image, name, rating, reviewsCount, 
    description, brand, stock, price
  } = props

  return (
    <div style={{ width: '99.7%' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid xs={12} md={6} s={2} >
            <Item>
              <div>
                <Image
                  src={image}
                  alt={name}
                  width={600}
                  height={600}
                  sizes='100vw'
                  className={style.img}
                />
              </div>
            </Item>
          </Grid>

          <Grid xs={12} md={6} s={2}>
            <Item style={{ backgroundColor: 'black' }}>

              <Grid container spacing={1}>
                <Grid xs={12} md={6} s={2} >
                  <Item className={style.details}>
                    <ul>
                      <li>
                        <h1>{name}</h1>
                      </li>

                      <li>
                        {rating} of {reviewsCount}
                      </li>
                      <li>{brand}</li>
                      <hr style={{background:'gray'}}/>
                      <li>
                        Description: <p>{description}</p>
                      </li>
                    </ul>
                  </Item>
                </Grid>

                <Grid xs={12} md={6} s={2} >
                  <Item className={style.priceBox}>
                    {/* <div className={style.box}> */}
                      <div>
                        <div className={style.price}>
                          <div>Price</div>
                          <div>R{price}</div>
                        </div>

                        <div className={style.stock}>
                          <div>Status</div>
                          <div>
                            {stock > 0 ? 'In Stock' : 'Out of Stock'}
                          </div>
                        </div>

                        <div>
                          <AddToCart {...props}/>
                        </div>
                      </div>
                    {/* </div> */}
                  </Item>
                </Grid>
              </Grid>

            </Item>
          </Grid>

        </Grid>
      </Box>
    </div>
  )
}