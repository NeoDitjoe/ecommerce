import ProductDetails from "@/components/productItem/productDetails/productDetails"
import { DummyProducts } from "@/lib/data"
import Link from "next/link"


export default function Product(props) {

  const { product } = props

  return (
    <main>
      <Link href={'..'} style={{margin: '10px', color: 'white'}}>View Products</Link>
      <ProductDetails {...product}/>
    </main>
  )
}

export function getServerSideProps(props) {

  const { params } = props

  const product = DummyProducts.find((items) => items.slug === params.slug)

  return {
    props: {
      product
    }
  }
}