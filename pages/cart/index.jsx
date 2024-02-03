import CartItems from "@/components/cart/cartItems/userCart"
import { DummyProducts } from "@/lib/data"
// import { getCartItems } from "@/lib/database/getItems"

export default function cart(props){
  const { cartItems } = props

  console.log(cartItems)

  return (
    <>
      {
        // cartItems.map((item) => (
          <div>
            <CartItems products={DummyProducts} /* {...item} *//>
          </div>
        // ))
      }
    </>
   
  )
}

// export async function getServerSideProps() {

//   const cartItems = await getCartItems()

//   return{
//     props:{
//       cartItems
//     }
//   }
// }