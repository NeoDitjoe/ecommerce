import Image from "next/image"
import style from './userCart.module.css'
import { useRouter } from "next/router"
import { useSession } from "next-auth/react"
import StateContext from "@/lib/context"
 import { useState } from "react"

export default function CartItems(props) {

  const { theme } = StateContext()
  const [ qty, setQty ]= useState(null)
  const { products } = props
  const { data: session } = useSession()
  const userEmail = session && session.user.email[0]
  const quantity = []
  const totalCosts = []

  return (
    <div className={theme ? style.containerB : style.container}>
      {
        products && products.map((product) => {
          
          totalCosts.push(product.price * product.qty)
          quantity.push(product.qty)
          return (<div className={style.cart}>
            <div className={style.imgAndName}>

              <div className={style.imgDiv}>
                <Image
                  src={product.image}
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
                onClick={async () => await addItem({ qty: Number(product.qty) - 1, name: product.name, user: userEmail })}
              >-</button>
              <div>{product.qty}</div>
              <button
                onClick={async () => await addItem({ qty: Number(product.qty) + 1, name: product.name, user: userEmail })}
              >+</button>
            </div>

            <div className={style.price}>
              {(product.price * product.qty).toFixed(2)} R
            </div>
          </div>)
        })
      }

      <div>
        <div>
          {`Subtotal (${quantity.reduce((a, b) => a + b, 0)}): R ${totalCosts.reduce((a, b) => a + b, 0).toFixed(2)}`} 
        </div>
        <div>
          <button>
            checkout
          </button>
        </div>
      </div>
    </div> 
  )
}

async function addItem(item) {
  const response = await fetch('/api/cart/updateCart', {
    method: 'POST',
    body: JSON.stringify(item),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }

  return data;
}