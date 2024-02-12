import AddProduct from "@/components/dashBoard/products/add/addNew";
import DashboardWrapper from "@/components/dashBoard/wrapper/wrapper";


export default function add(){

  return (
    <DashboardWrapper children={<AddProduct />}/>
  )
}