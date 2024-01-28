import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { DummyProducts } from "@/lib/data";
import ProductItem from "@/components/productItem/productItem";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: /* theme.palette.mode ===  *//* 'dark' ? */ '#1A2027' /* : */ /* '#fff' */,
  ...theme.typography.body2,
  padding: theme.spacing(-5),
  // textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Home() {
  return (
    <main>
      <h2 className='lastestProducts'>Latest Products</h2>

      <Box sx={{ flexGrow: 2 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 4, md: 8 }}>
          {DummyProducts.map((product, index) => (
            <Grid xs={8} sm={2} md={2} key={index}>
              <Item>
                <ProductItem
                  product={product}
                />
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </main>
  );
}
