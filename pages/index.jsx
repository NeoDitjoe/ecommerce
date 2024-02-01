import { Items } from '@/components/productItem/productItem';
import getItem from '@/lib/database/getItems';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Home(props) {

  const { products } = props

  const { data: session } = useSession()

  if (session && session.user) {
    return (
      <main style={{ width: '99%' }}>
        <h2 className='lastestProducts'>Latest Products</h2>
        <Items
          products={products}
        />
      </main>
    )
  }

  return (
    <button onClick={() => signIn()}>
      signIn
    </button>
  );
}

export async function getServerSideProps() {
  const products = await getItem()

  return {
    props: {
      products
    }
  }
}
