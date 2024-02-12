import Homepage from '@/components/homePage/home';
import { Items } from '@/components/productItem/productItem';
import getItem from '@/lib/database/getItems';
import Link from 'next/link';

export default function Home(props) {

  const { products } = props

  return (
    <main style={{ width: '99%' }}>
      <p>Viewed as customer</p>
      Go to <Link href={'/dashboard'}>Dashboard</Link>
      <div className='mainIndexBackground'></div>
      {/* <h2 className='lastestProducts'>Latest Products</h2> */}
      <Homepage
        products={products}
      />
    </main>
  )
}

export async function getServerSideProps() {
  const products = await getItem()

  return {
    props: {
      products
    }
  }
}
