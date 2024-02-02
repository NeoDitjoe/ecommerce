import CartItems from "@/components/cart/cartItems/userCart"
import { getCartItems } from "@/lib/database/getItems"

export default function cart(props){
  const { cartItems } = props

  console.log(cartItems)

  return (
    <>
      {
        cartItems.map((item) => (
          <div>
            <CartItems {...item}/>
          </div>
        ))
      }
    </>
   
  )
}

export async function getServerSideProps() {

  const cartItems = await getCartItems()

  return{
    props:{
      cartItems
    }
  }
}