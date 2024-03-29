import Homepage from '@/components/homePage/home';
// import { Items } from '@/components/productItem/productItem';
// import getItem from '@/lib/database/getItems';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import StateContext from '@/lib/context';
import LoadingBackdrop from '@/components/backdrop/loading';

export default function Home(props) {

  // const { products } = props
  const { setOpen } = StateContext()

  const [ products, setProducts ] = useState(null)

  useEffect(() => {
    fetch('/api/getProducts')
      .then(res => res.json())
      .then(data => setProducts(data.results))
  }, [products])

  // setOpen(!products)

  return (
    <main style={{ width: '99%' }}>
      <p>Viewed as customer</p>
      Go to <Link href={'/dashboard'}>Dashboard</Link>
      <div className='mainIndexBackground'></div>
      <Homepage
        products={products}
      />

      <LoadingBackdrop/>
    </main>
  )
}

// export async function getServerSideProps() {
//   const products = await getItem()

//   return {
//     props: {
//       products
//     }
//   }
// }
