import Image from "next/image"
import style from './userCart.module.css'
import { useRouter } from "next/router"
import { useSession } from "next-auth/react"
import StateContext from "@/lib/context"
import { useState } from "react"
import addItem from "@/lib/database/addItems"
import CircularProgress from '@mui/material/CircularProgress';

export default function CartItems(props) {

  const { products } = props

  const { theme } = StateContext()
  const { data: session } = useSession()

  const [ decrementLoading, setDecrementLoading ] = useState(false)
  const [ incrementLoading, setIncrementLoading ] = useState(false)

  const userEmail = session && session.user.email[0]
  const quantity = []
  const totalCosts = []

  async function decrement(product){

    try {
      setDecrementLoading(true)
      const response = await addItem('/api/cart/updateCart', { qty: Number(product.qty) - 1, name: product.name, user: userEmail })
      
      if(response.message == 'Success'){

        setDecrementLoading(false)
      }
      
    } catch (error) {
      setDecrementLoading(false)
      alert(error)
    }

    if (Number(product.qty) < 2) {
      await removeItem(userEmail, product.name)
    }
  }

  async function increment(product){

    try {
      setIncrementLoading(true)
      const response = await addItem('/api/cart/updateCart', { qty: Number(product.qty) + 1, name: product.name, user: userEmail })
      
      if(response.message == 'Success'){

        setIncrementLoading(false)
      }
      
    } catch (error) {
      setIncrementLoading(false)
      alert(error)
    }
  }

  return (
    <div className={theme ? style.containerB : style.container}>
      {
        products && products.map((product, index) => {

          totalCosts.push(product.price * product.qty)
          quantity.push(product.qty)
          return (
            <div className={style.cart} key={index}>
              <div className={style.imgAndName}>

                <div className={style.imgDiv}>
                  <Image
                    src={product.image || product.imgFile}
                    alt={product.name}
                    width={200}
                    height={200}
                    className={style.img}
                  />
                </div>

                <div>
                  <p className={style.name}>{product.name}</p>
                </div>
              </div>

              <div className={theme ? style.qtyB : style.qty}>
                <button
                  onClick={() => decrement(product)}
                >{decrementLoading ? <CircularProgress/> : '-'}</button>
                <div>{product.qty}</div>
                <button
                  onClick={() => increment(product)}
                >{incrementLoading ? <CircularProgress/> : '+'}</button>
              </div>

              <div className={style.price}>
                {(product.price * product.qty).toFixed(2)} R
              </div>
            </div>)
        })
      }

      <div className={style.checkout}>
        <div>
          <div>
            {`Subtotal (${quantity.reduce((a, b) => a + b, 0)}):`}
          </div>
          <div>
            {` R ${totalCosts.reduce((a, b) => a + b, 0).toFixed(2)}`}
          </div>
        </div>
        <div>
          <button className={style.checkoutButton}>
            checkout
          </button>
        </div>
      </div>
    </div>
  )
}

async function removeItem(userEmail, name) {
  await fetch('/api/cart/removeItem', {
    method: 'POST',
    body: JSON.stringify({ userEmail, name }),
    headers: {
      'Content-Type': 'application/json',
    }
  })
}