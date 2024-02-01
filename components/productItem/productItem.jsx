import Image from "next/image";
import Link from "next/link";
import style from './productItem.module.css'

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

export default function Structure(props) {

  const { image, name, slug, brand, price } = props.product
  return (
    <div className={style.main}>
      <figure>
        <Link href={`/product/${slug}`}>
          <Image
            src={image}
            alt={name}
            width={300}
            height={300}
            className={style.img}
          />
        </Link>
      </figure>

      <div>
        <Link href={`/product/${slug}`}>
          {name}
        </Link>
        <p>{brand}</p>
        <div>
          <h2>R{price}</h2>
        </div>
      </div>
    </div>
  )
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: /* theme.palette.mode ===  *//* 'dark' ? */ '#1A2027' /* : */ /* '#fff' */,
  ...theme.typography.body2,
  padding: theme.spacing(-5),
  color: theme.palette.text.secondary,
}));

export function Items({products}) {

  return (
    <Box sx={{ flexGrow: 2 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 4, md: 8 }}>
        {products.map((product, index) => (
          <Grid xs={8} sm={2} md={2} key={index}>
            <Item>
              <Structure
                product={product}
              />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}


