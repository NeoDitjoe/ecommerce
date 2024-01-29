import ProductItem from "@/components/productItem/productItem"
import { DummyProducts } from "@/lib/data"


export default function Product(props) {

  const { product } = props

  return (
    <main>
      <ProductItem product={product} />
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