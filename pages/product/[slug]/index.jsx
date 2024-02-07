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

export async function getServerSideProps(props) {

  const { params } = props
  const products = await getItem()

  const product = products.find((items) => items._id === params.slug)

  return {
    props: {
      product
    }
  }
}