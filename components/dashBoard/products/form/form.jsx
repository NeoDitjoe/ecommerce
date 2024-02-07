import { Item } from "../../muiStyle"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import style from './form.module.css'

export default function Form(props) {

  const {
    nameRef,
    priceRef,
    categoryRef, 
    brandRef, 
    fileRef, 
    imageRef, 
    categoriesListRef, 
    descriptionRef, 
    stockRef, 
    add 
  } = props

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
              <input type="text" placeholder="Categories" ref={categoriesListRef} />
            </Item>
          </Grid>

          <Grid xs={12} md={6} s={2} >
            <Item>
              <textarea type="text" placeholder="Description" ref={descriptionRef} />
            </Item>
          </Grid>

          <Grid xs={12} md={6} s={2} >
            <Item>
              <input type="number" placeholder="Stock no." ref={stockRef} />
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