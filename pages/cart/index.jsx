import CartItems from "@/components/cart/cartItems/userCart"
import { DummyProducts } from "@/lib/data"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"

export default function cart(props){
  const [ cartItems, setCartItems ] = useState(null)
  const { data: session } = useSession()
  const userEmail = session && session.user.email[0]

  useEffect(() => {
    fetch(`/api/cart/getCartItems?user=${userEmail}`)
      .then(res => res.json())
      .then(data => setCartItems(data.results))
  })

  return (
    <>
      {
        <div>
          <CartItems products={DummyProducts}/>
        </div>
      }
    </>
   
  )
}