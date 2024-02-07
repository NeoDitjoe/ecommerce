import { useSession } from 'next-auth/react'
import style from './addToCart.module.css'
import Backdrop from '@mui/material/Backdrop';
import { useState } from 'react';;
import Link from 'next/link';
import LoadingBackdrop from '@/components/backdrop/loading';
import StateContext from '@/lib/context';

export default function AddToCart(props) {

  const { name, image, price, slug } = props //it is used, props is called as a whole
  const { data: session } = useSession()
  const user = session && session.user

  const [openSignIn, setOpopenSignIn] = useState(false);
  const { setOpen } = StateContext()

  const handleClose = () => {
    setOpopenSignIn(false);
  };
  const handleOpen = () => {
    setOpopenSignIn(true);
  };

  const additem = async function (e) {
    e.preventDefault()

    try {
      setOpen(true)
      await placeOrder(props, user.email[0])
      setOpen(false)
    } catch (error) {
      setOpen(false)
    }
  }

  return (
    <div>
      <button  className={style.button} onClick={user ? additem : handleOpen}>Add To Cart</button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openSignIn}
        onClick={handleClose}
      >
        <div className={style.backdrop}>
          <h3>Login to use cart</h3>
          <Link href={'/auth'}>Login here</Link>
        </div>
      </Backdrop>
      <LoadingBackdrop />
    </div>
  )
}

async function placeOrder(products, userEmail) {
  const response = await fetch('/api/cart/addtoCart', {
    method: 'POST',
    body: JSON.stringify({ products, userEmail: userEmail }),
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