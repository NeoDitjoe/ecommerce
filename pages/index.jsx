import Homepage from '@/components/homePage/home';
import { Items } from '@/components/productItem/productItem';
import getProducts from '@/lib/database/getProducts';
// import getItem from '@/lib/database/getItems';
import Link from 'next/link';

export default function Home(props) {

  const { products } = props

  return (
    <main style={{ width: '99%' }}>
      <p>Viewed as customer</p>
      Go to <Link href={'/dashboard'}>Dashboard</Link>
      <div className='mainIndexBackground'></div>
      <Homepage
        products={products}
      />
    </main>
  )
}

export async function getServerSideProps() {
  // const products = await getItem()
  const products = await getProducts()

  return {
    props: {
      products
    }
  }
}
