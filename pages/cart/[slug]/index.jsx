import CartItems from "@/components/cart/cartItems/userCart"
import { getCartItems } from "@/lib/database/getItems"

export default function cart(props){
  const { cartItems } = props

  return (
    <>
      {
          <div>
            <CartItems products={cartItems}/>
          </div>
      }
    </>
   
  )
}

export async function getServerSideProps({params}) {

  const { slug } = params
  const cartItems = await getCartItems(slug)
  
  return{
    props:{
      cartItems,
    }
  }
}