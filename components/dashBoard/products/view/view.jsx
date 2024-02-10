import { Item } from "../../muiStyle"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import style from './view.module.css'
import Image from "next/image";
import Backdrop from '@mui/material/Backdrop';
import { useRef, useState } from "react";
import Form from "../form/form";
import addItem from "@/lib/database/addItems";
import { useRouter } from "next/router";
import StateContext from "@/lib/context";
import LoadingBackdrop from "@/components/backdrop/loading";

export default function View(props) {

  const { product } = props
  const [openForm, setOpenForm] = useState(false)
  const { setOpen } = StateContext()
  const [imgFile, setImaFile] = useState(null)
  const router = useRouter()

  const nameRef = useRef()
  const priceRef = useRef()
  const categoryRef = useRef()
  const brandRef = useRef()
  const imageRef = useRef()
  const categoriesListRef = useRef()
  const descriptionRef = useRef()
  const stockRef = useRef()

  const editForm = function () {
    nameRef.current.value = product.name
    priceRef.current.value = product && product.price
    categoryRef.current.value = product.category
    categoriesListRef.current.value = product.categoriesList
    descriptionRef.current.value = product.description
    stockRef.current.value = product.stock
    brandRef.current.value = product.brand
  }

  const updateHandler = async function () {
    const name = nameRef.current.value
    const price = priceRef.current.value
    const category = categoryRef.current.value
    const image = imageRef.current.value
    const categoryList = categoriesListRef.current.value
    const description = descriptionRef.current.value
    const stock = stockRef.current.value
    const brand = brandRef.current.value

    const product = {
      name,
      price: Number(price),
      category,
      imgFile,
      image,
      categoryList: categoryList.split(' '),
      description,
      stock,
      brand,
    }

    try {
      setOpen(true)
      const response = await addItem('/api/dashboard/editProduct', {product})
      if(response.message == 'success'){
        setOpen(false)
      }
    } catch (error) {
      alert(error)
      setOpen(false)
    }

  }

  function createImgLink(e) {

    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImaFile(reader.result)
    }
    reader.onerror = error => {
      console.log('Error: ', error)
    }
  }

  return (
    <div className={style.main}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>

          <Grid xs={12} md={4} s={2} >
            <Item>
              <div className={style.imgDiv}>
                <Image
                  src={product && product.image}
                  width={300}
                  height={300}
                  className={style.img}
                  alt={product && product.name}
                />
              </div>
            </Item>
          </Grid>

          <Grid xs={12} md={4} s={2} >
            <Item>
              <h5>Name:</h5>
              <p>{product && product.name}</p>
            </Item>
            <Item>
              <h5>Price:</h5>
              <p>{product && product.price.toFixed(2)}</p>
            </Item>
            <Item>
              <h5>category:</h5>
              <p>{product && product.category}</p>
            </Item>
            <Item>
              <h5>Brand:</h5>
              <p>{product && product.brand}</p>
            </Item>
          </Grid>

          <Grid xs={12} md={4} s={2} >
            <Item>
              <h5>rating</h5>
              <p>{product && product.rating}</p>
            </Item>
            <Item>
              <h5>Reviews No.</h5>
              <p>{product && product.reviewsCount}</p>
            </Item>
            <Item>
              <h5>Stock No.</h5>
              <p>{product && product.stock}</p>
            </Item>
            <Item>
              <h5>category</h5>
              <p>{product && product.categoryList}</p>
            </Item>
          </Grid>

          <Grid xs={12} md={8} s={2} >
            <Item>
              <h5>description:</h5>
              <p>{product && product.description}</p>
            </Item>
          </Grid>

          <Grid xs={12} md={4} s={2} >
            <Item>
              <button
                onClick={() => {
                  setOpenForm(true)
                  editForm()
                }}
                className={style.button}
              >Edit Product</button>
            </Item>
          </Grid>

          <Backdrop
            sx={{
              color: 'white',
              zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
            open={openForm}

          >
            <div className={style.form}>

              <button
                className={style.closeButton}
                onClick={() => {
                  setOpenForm(false)

                }}
              >Close</button>
              <Form
                nameRef={nameRef}
                priceRef={priceRef}
                categoryRef={categoryRef}
                brandRef={brandRef}
                createImgLink={createImgLink}
                imageRef={imageRef}
                categoriesListRef={categoriesListRef}
                descriptionRef={descriptionRef}
                stockRef={stockRef}
                add={updateHandler}
              />

            </div>
          </Backdrop>

          <LoadingBackdrop />

        </Grid>
      </Box>
    </div>
  )
}

