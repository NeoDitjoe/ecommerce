import { Item } from "../muiStyle"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import style from './products.module.css'
import Image from "next/image";
import Link from "next/link";
import removeItem from "@/lib/database/removeItem";

export default function Products(props) {

  const { products } = props

  const removeHandler = async function (productName) {

    await removeItem(`/api/dashboard/removeProduct?name=${productName}`)
  }

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
                    products && products.map((product, index) => {
                      const date = new Date(product.createdAt)
                      const day = date.getDate().toString().padStart(2, 0)
                      const month = date.toString().split(' ')[1]
                      const year = date.getFullYear()

                      const productAddedDate = day + ' ' + month + ' ' + year

                      return <tr key={index}>
                        <td className={style.imgAndName}>
                          <Image
                            src={product.image || product.imgFile}
                            className={style.img}
                            alt={product.email}
                            width={200}
                            height={200}
                          />
                          <p>{product.name}</p>
                        </td>

                        <td className={style.description}>{product.description}</td>
                        <td>R {product.price.toFixed(2)}</td>
                        <td>{productAddedDate}</td>
                        <td>{product.stock}</td>
                        <td>
                          <Link className={style.view}
                            href={`/dashboard/products/view?product=${product._id}`}
                          >view</Link>
                          <button
                            className={style.delete}
                            onClick={() => removeHandler(product.name)}
                          >delete</button>
                        </td>
                      </tr>
                    })
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