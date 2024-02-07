import View from "@/components/dashBoard/products/view/view";
import DashboardWrapper from "@/components/dashBoard/wrapper/wrapper";
import { DummyProducts } from "@/lib/dummyData";
import { useRouter } from "next/router";

export default function view(){
  const router = useRouter()

  const product = DummyProducts.find((item) => item.name === router.query.product)

  return (
    <DashboardWrapper 
      children={<View product = {product} />}
    />
  )
}