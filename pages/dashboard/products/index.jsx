import Products from "@/components/dashBoard/products/products";
import DashboardWrapper from "@/components/dashBoard/wrapper/wrapper";
import getItem from "@/lib/database/getItems";

export default function products(props) {
  
  const { products } = props
  return (
    <div>
      {/* <DashboardWrapper
       children= {<Products products= {products} />}
      /> */}
    </div>
  )
}

export async function getServerSideProps(){

  const products = await getItem()

  return {
    props:{
      products
    }
  }
}