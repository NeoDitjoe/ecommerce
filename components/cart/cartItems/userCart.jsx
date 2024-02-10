import Image from "next/image"
import style from './userCart.module.css'
import { useRouter } from "next/router"
import { useSession } from "next-auth/react"
import StateContext from "@/lib/context"
import { useState } from "react"
import addItem from "@/lib/database/addItems"

export default function CartItems(props) {

  const { theme } = StateContext()
  const [qty, setQty] = useState(null)
  const { products } = props
  const { data: session } = useSession()
  const userEmail = session && session.user.email[0]
  const quantity = []
  const totalCosts = []

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
                  onClick={async () => {
                    await addItem('/api/cart/updateCart', { qty: Number(product.qty) - 1, name: product.name, user: userEmail })
                    if (Number(product.qty) < 2) {
                      await removeItem(userEmail, product.name)
                    }
                  }}
                >-</button>
                <div>{product.qty}</div>
                <button
                  onClick={async () => await addItem('/api/cart/updateCart', { qty: Number(product.qty) + 1, name: product.name, user: userEmail })}
                >+</button>
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