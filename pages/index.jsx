import { Items } from '@/components/productItem/productItem';
// import getItem from '@/lib/database/getItems';
import { DummyProducts } from '@/lib/data';

export default function Home(props) {

  // const { products } = props

  return (
    <main style={{ width: '99%' }}>
      <h2 className='lastestProducts'>Latest Products</h2>
      <Items
        products={DummyProducts}
      />
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
