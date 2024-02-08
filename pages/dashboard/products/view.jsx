import View from "@/components/dashBoard/products/view/view";
import DashboardWrapper from "@/components/dashBoard/wrapper/wrapper";
import getItem from "@/lib/database/getItems";
import { DummyProducts } from "@/lib/dummyData";
import { useRouter } from "next/router";

export default function view(props){

  const { products } = props
  const router = useRouter()

  const product = products.find((item) => item._id === router.query.product)

  return (
    <DashboardWrapper 
      children={<View product = {product} />}
    />
  )
}

export  async function getServerSideProps(){

  const products = await getItem()

  return{
    props:{
      products
    }
  }
}