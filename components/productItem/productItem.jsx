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

  const { imgFile, image, name, brand, price, _id } = props.product
  return (
    <div className={theme ? style.mainB : style.main}>
      <figure>
        <Link href={`/product/${_id}`}>
          <Image
            src={imgFile}
            alt={name}
            width={300}
            height={300}
            className={style.img}
          />
        </Link>
      </figure>

      <div>
        <Link href={`/product/${_id}`}>
          <h4 className={style.name}>{name.split('').length > 22 ? name.substring(0, 22) + '...' : name}</h4>
        </Link>
        <p>{brand}</p>
        <div>
          <h3>R{price}</h3>
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
        {products && products.map((product, index) => (
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


