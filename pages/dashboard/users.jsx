import Users from "@/components/dashBoard/users/users";
import Wrapper from "@/components/dashBoard/wrapper/wrapper";

export default function users() {

  return (
    <Wrapper
      children={<Users/>}
    />
  )
}