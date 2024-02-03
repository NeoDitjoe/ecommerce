import Image from "next/image"
import style from './userCart.module.css'
import { useRouter } from "next/router"
import { useSession } from "next-auth/react"

export default function CartItems(props) {

  const { products } = props
  const { data: session } = useSession()
  const userEmail = session && session.user.email[0]

  return (
    <div className={style.container}>
      {
        products && products.map((product) => (
          <div className={style.cart}>
            <div className={style.imgAndName}>

              <div>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className={style.img}
                />
              </div>

              <div>
                <p>{product.name}</p>
              </div>
            </div>

            <div className={style.qty}>
              <button
                onClick={async() => await addItem({qty: Number(product.qty) - 1, name: product.name, user: userEmail })}
              >-</button>
              <div>{product.qty}</div>
              <button
                onClick={async() => await addItem({qty: Number(product.qty) + 1, name: product.name, user: userEmail })}
              >+</button>
            </div>

            <div>
              R{product.price.toFixed(2) * product.qty}
            </div>
          </div>
        ))
      }

      {/* <div>
        <div>
          {`Subtotal (${'total qty'}): R${price}`}
        </div>
        <div>
          <button>
            checkout
          </button>
        </div>
      </div> */}
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