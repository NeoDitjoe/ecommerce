import { Fragment } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image';
import style from './productDetails.module.css'
import AddToCart from '@/components/cart/addToCart/addToCart';
import Rating from '@mui/material/Rating';

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
    description, brand, stock, price, imgFile
  } = props

  return (
    <div style={{ width: '99.7%' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid xs={12} md={6} s={2} >
            <Item style={{background: 'rgb(234, 236, 234)' }}>
              <div className={style.img}>
                <Image
                  src={image || imgFile}
                  alt={name}
                  width={600}
                  height={600}
                  sizes='100vw'
                  
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
                      {/* <Typography component="legend">Read only</Typography> */}
                      <Rating name="read-only" value={5} readOnly />
                      <li>
                        {rating} of {reviewsCount}
                      </li>
                      <li>{brand}</li>
                      <hr style={{ background: 'gray' }} />
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
                        <AddToCart {...props} />
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