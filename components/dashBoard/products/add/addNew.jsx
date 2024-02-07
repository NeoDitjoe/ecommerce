import { Item } from "../../muiStyle"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import style from './addNew.module.css'
import { useRef } from "react";

export default function AddProduct() {

  const nameRef = useRef()
  const priceRef = useRef()
  const categoryRef = useRef()
  const brandRef = useRef()
  const fileRef = useRef()
  const imageRef = useRef()
  const categoriesListRef = useRef()
  const descriptionRef = useRef()
  const stockRef = useRef()

  const add = function() {
    const name = nameRef.current.value
    const price = priceRef.current.value
    const category = categoryRef.current.value
    const file = fileRef.current.value 
    const image = imageRef.current.value 
    const categoryList = categoriesListRef.current.value 
    const description = descriptionRef.current.value 
    const stock = stockRef.current.value

    const addData = {
      name,
      price: Number(price),
      category,
      file,
      image,
      categoryList : categoryList.split(' '),
      description,
      stock,
      qty:0
    }

    console.log(addData)
  }

  return (
    <div className={style.main}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>

          <Grid xs={12} md={6} s={2} >
            <Item>
              <input type='text' placeholder="Product Name" ref={nameRef} />
            </Item>
          </Grid>

          <Grid xs={12} md={6} s={2} >
            <Item>
              <input type="number" placeholder="Price" ref={priceRef} />
            </Item>
          </Grid>

          <Grid xs={12} md={6} s={2} >
            <Item>
              <input type="text" placeholder="Category" ref={categoryRef} />
            </Item>
          </Grid>

          <Grid xs={12} md={6} s={2} >
            <Item>
              <input type="text" placeholder="Brand" ref={brandRef} />
            </Item>
          </Grid>

          <Grid xs={12} md={6} s={2} >
            <Item>
              <input style={{ cursor: 'pointer' }} type="file" placeholder="Price" ref={fileRef} />
            </Item>
          </Grid>

          <Grid xs={12} md={6} s={2} >
            <Item>
              <input type="text" placeholder="Image Link" ref={imageRef} />
            </Item>
          </Grid>

          <Grid xs={12} md={6} s={2} >
            <Item>
              <input type="text" placeholder="categories" ref={categoriesListRef} />
            </Item>
          </Grid>

          <Grid xs={12} md={6} s={2} >
            <Item>
              <textarea type="text" placeholder="description" ref={descriptionRef} />
            </Item>
          </Grid>

          <Grid xs={12} md={6} s={2} >
            <Item>
              <input type="number" placeholder="stock" ref={stockRef} />
            </Item>
          </Grid>

          <Grid xs={12} md={6} s={2} >
            <Item>
              <button
                className={style.button}
                onClick={add}
              >Submit</button>
            </Item>
          </Grid>

        </Grid>
      </Box>
    </div>
  )
}