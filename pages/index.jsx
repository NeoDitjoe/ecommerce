import { Items } from '@/components/productItem/productItem';
import getItem from '@/lib/database/getItems';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const data = [{ name: 'Page A', uv: 100, pv: 2400, amt: 2400 }, { name: 'Page B', uv: 400, pv: 2400, amt: 2400 },{ name: 'Page C', uv: 400, pv: 2400, amt: 2400 },{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }];

export default function Home(props) {

  const { products } = props

  return (
    <main style={{ width: '99%' }}>
      <div className='mainIndexBackground'></div>

      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
      <h2 className='lastestProducts'>Latest Products</h2>
      <Items
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