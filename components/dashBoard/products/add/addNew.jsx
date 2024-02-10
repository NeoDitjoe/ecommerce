import { Item } from "../../muiStyle"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import style from './addNew.module.css'
import { useRef, useState } from "react";
import addItem from "@/lib/database/addItems";
import Form from "../form/form";
import StateContext from "@/lib/context";
import LoadingBackdrop from "@/components/backdrop/loading";

export default function AddProduct() {

  const nameRef = useRef()
  const priceRef = useRef()
  const categoryRef = useRef()
  const brandRef = useRef()
  const imageRef = useRef()
  const categoriesListRef = useRef()
  const descriptionRef = useRef()
  const stockRef = useRef()

  const [imgFile, setImaFile] = useState(null)
  const { setOpen } = StateContext()

  const add = async function () {
    const name = nameRef.current.value
    const price = priceRef.current.value
    const category = categoryRef.current.value
    const image = imageRef.current.value
    const categoryList = categoriesListRef.current.value
    const description = descriptionRef.current.value
    const stock = stockRef.current.value
    const brand = brandRef.current.value

    const addData = {
      name,
      price: Number(price),
      brand,
      category,
      imgFile,
      image,
      categoryList: categoryList.split(' '),
      description,
      stock,
      qty: 0
    }

    setOpen(true)


    try {
      setOpen(true)
      const response = await addItem('/api/dashboard/addNewProduct', { addData })

      if (response.message == 'successfully added new product') {
        alert('success')

        nameRef.current.value = ''
        priceRef.current.value = ''
        categoryRef.current.value = ''
        imageRef.current.value = ''
        categoriesListRef.current.value = ''
        descriptionRef.current.value = ''
        stockRef.current.value = ''
        brandRef.current.value = ''
        setImaFile(null)
      }
      setOpen(false)
    } catch (error) {
      alert('failed' + error)
      setOpen(false)
    }
    console.log(addData)

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
        add={add}
      />
      <LoadingBackdrop />
    </div>
  )
}