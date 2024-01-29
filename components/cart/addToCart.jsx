import { useEffect } from 'react'
import style from './addToCart.module.css'

export default function AddToCart(props) {

  const {name, image, price, slug} = props

  const product = {
    name: name,
    image: image,
    price: price,
    slug: slug
  }

  const additem = function(){
    
  }
  return (
    <button className={style.button} onClick={additem}>
      AddToCart
    </button>
  )
}