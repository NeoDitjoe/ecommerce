import Users from "@/components/dashBoard/users/users";
import Wrapper from "@/components/dashBoard/wrapper/wrapper";
import getUsers from "@/lib/database/dashboard/getUsers";

export default function users(props) {

  const { users } = props
  return (
    <Wrapper
      children={<Users users={users}/>}
    />
  )
}

export async function getServerSideProps(){

  const users = await getUsers()

  return {
    props:{
      users
    }
  }
}