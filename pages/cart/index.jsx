import { getCartItems } from "@/lib/database/getItems"


export default function cart(props){
  const { cartItems } = props

  console.log(cartItems)

  return (
    <p>this is the cart</p>
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