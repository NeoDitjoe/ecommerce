import Image from "next/image";
import Link from "next/link";
import style from './productItem.module.css'

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import StateContext from "@/lib/context";

export default function Structure(props) {

  const { theme } = StateContext()

  const { image, name, slug, brand, price } = props.product
  return (
    <div className={theme ? style.mainB : style.main}>
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
          <h3>{name}</h3>
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
  // backgroundColor: theme ? '#1A2027': 'rgb(220, 218, 218)' ,
  ...theme.typography.body2,
  padding: theme.spacing(-5),
  color: theme.palette.text.secondary,
}));

export function Items({products}) {

  const { theme } = StateContext()

  return (
    <Box sx={{ flexGrow: 2 }}>
      <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 12, sm: 12, md: 12 }}>
        {products.map((product, index) => (
          <Grid xs={6} sm={3} md={2} key={index}>
            <Item style={{ background: theme? '#1A2027' : 'rgb(220, 218, 218)'}}>
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


