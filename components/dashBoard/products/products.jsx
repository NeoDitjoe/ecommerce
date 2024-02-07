import { Item } from "../muiStyle"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import style from './products.module.css'
import { DummyProducts, dummyUsers } from "@/lib/dummyData";
import Image from "next/image";
import Link from "next/link";

export default function Products() {

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>

          <Grid xs={12} md={12} s={2} >
            <Item style={{ background: 'rgb(27, 27, 42)' }}>
              <button className={style.addnew}>
                <Link href={'/dashboard/products/add'} >Add New</Link>
              </button>
              <table className={style.table}>
                <thead>
                  <tr>
                    <td>Title</td>
                    <td>Descrpition</td>
                    <td>Price</td>
                    <td>Created At</td>
                    <td>stock</td>
                    <td>Action</td>
                  </tr>
                </thead>
                <tbody>
                  {
                    DummyProducts.map((product, index) => (
                      <tr key={index}>
                        <td className={style.imgAndName}>
                          <Image
                            src={product.image}
                            className={style.img}
                            alt={product.email}
                            width={200}
                            height={200}
                          />
                          <p>{product.name}</p>
                        </td>

                        <td className={style.description}>{product.description.substring(0, 50)}</td>
                        <td>R {product.price.toFixed(2)}</td>
                        <td>{product.date}</td>
                        <td>{product.stock}</td>
                        <td>
                          <Link className={style.view}
                            href={`/dashboard/products/view?product=${product.name}`}
                          >view</Link>
                          <button className={style.delete}>delete</button>
                        </td>
                      </tr>
                    ))
                  }

                </tbody>
              </table>
            </Item>
          </Grid>

        </Grid>
      </Box>
    </div>
  )
}