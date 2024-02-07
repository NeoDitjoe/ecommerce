import ProductDetails from "@/components/productItem/productDetails/productDetails"
import getItem from "@/lib/database/getItems"
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
  const products = getItem()

  const product = products.find((items) => items.slug === params.slug)

  return {
    props: {
      product
    }
  }
}