import { signIn, useSession } from 'next-auth/react'
import style from './addToCart.module.css'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { useState } from 'react';
import GoogleButton from 'react-google-button';

export default function AddToCart(props) {

  const { name, image, price, slug } = props
  const { data: session } = useSession()
  const user = session && session.user

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const additem = async function (e) {
    e.preventDefault()

    try {
      await placeOrder(props, user.email)
    } catch (error) {
      console.log('error')
    }
  }
  return (
    <div>
      <button  className={style.button} onClick={user ? additem :handleOpen}>Add To Cart</button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <GoogleButton 
          onClick={() => signIn('google')}
        />
      </Backdrop>
    </div>
  )
}

async function placeOrder(products, username) {
  const response = await fetch('/api/addtoCart', {
    method: 'POST',
    body: JSON.stringify({ products, username: username }),
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