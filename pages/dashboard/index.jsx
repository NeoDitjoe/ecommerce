import Dashboard from "@/components/dashBoard/dashboard/dashboard";
import Wrapper from "@/components/dashBoard/wrapper/wrapper";
import Link from "next/link";

export default function dashboard(){

  return (
    <div>
      <Wrapper 
        children={<Dashboard/>}
      />
    </div>
  )
}