import { Item } from "../../muiStyle"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import style from './addNew.module.css'
import { useRef } from "react";
import addItem from "@/lib/database/addItems";
import Form from "../form/form";

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

  const add = async function () {
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
      categoryList: categoryList.split(' '),
      description,
      stock,
      qty: 0
    }

    await addItem('/api/dashboard/addNewProduct', { addData })
    console.log(addData)

  }

  return (
    <div className={style.main}>
      <Form
        nameRef={nameRef}
        priceRef={priceRef}
        categoryRef={categoryRef}
        brandRef={brandRef}
        fileRef={fileRef}
        imageRef={imageRef}
        categoriesListRef={categoriesListRef}
        descriptionRef={descriptionRef}
        stockRef={stockRef}
        add={add}
      />
    </div>
  )
}