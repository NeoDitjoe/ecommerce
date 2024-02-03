import Image from "next/image"
import style from './userCart.module.css'

export default function CartItems(props) {

  const { /* image, name, price,  */products } = props

  return (
    <div className={style.container}>
      {
        products.map((product) => (
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
              <button>-</button>
              <div>{0}</div>
              <button>+</button>
            </div>

            <div>
              R{product.price.toFixed(2)}
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