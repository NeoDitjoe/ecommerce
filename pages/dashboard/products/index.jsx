import Products from "@/components/dashBoard/products/products";
import DashboardWrapper from "@/components/dashBoard/wrapper/wrapper";

export default function products() {
  return (
    <div>
      <DashboardWrapper
       children= {<Products />}
      />
    </div>
  )
}