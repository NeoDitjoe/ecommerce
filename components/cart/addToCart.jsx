import style from './addToCart.module.css'

export default function AddToCart(props) {

  const { name, image, price, slug } = props

  const additem = async function(e){
    e.preventDefault()
    
    try {
      await placeOrder(props)
    }catch(error){
      console.log('error')
    }
  }
  return (
    <button className={style.button} onClick={additem}>
      AddToCart
    </button>
  )
}

async function placeOrder(products) {
  const response = await fetch('/api/addtoCart', {
    method: 'POST',
    body: JSON.stringify({products}),
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