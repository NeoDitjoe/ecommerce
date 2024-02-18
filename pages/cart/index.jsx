import CartItems from "@/components/cart/cartItems/userCart"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"

export default function cart(props) {
  const [cartItems, setCartItems] = useState(null)
  const { data: session } = useSession()
  const userEmail = session && session.user.email[0]

  useEffect(() => {
    try {
      fetch(`/api/cart/getCartItems?user=${userEmail}`)
        .then(res => res.json())
        .then(data => setCartItems(data.results))
    } catch (error) {
      console.log('error')
    }
  })

  return (
    <>
      {
        <div>
          <CartItems products={cartItems} />
        </div>
      }
    </>

  )
}