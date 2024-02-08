import addItem from "@/lib/database/addItems"
import { useSession } from "next-auth/react"
import { useRef } from "react"

export default function UserProfile() {
  const imageRef = useRef()
  const { data: session } = useSession()

  const userEmail = session && session.user.email[0]

  const upload = async function () {
    const image = imageRef.current.value

    await addItem('/api/profile/user', {userEmail: userEmail, image: image})
  }

  return (
    <div>
      <form>
        <input type="text" name='image'ref={imageRef}/>
      </form>
        <button onClick={upload} >submit</button>
    </div>
  )
}