import { usePathname } from "next/navigation"
import style from './navbar.module.css'
import { MdMessage, MdNotifications } from "react-icons/md";
import { FaGlobeAfrica } from "react-icons/fa";

export default function Navbar() {

  const pathname = usePathname()
  const currentPath = pathname.split('/').pop()
  const upperCase = currentPath.at(0).toLocaleUpperCase()

  return (
    <div className={style.navbar}>
      <div>
        <h5>{upperCase + currentPath.slice(1)}</h5>
      </div>

      <div>

        <div>
          <input placeholder="search" />
        </div>

        <div><MdMessage/></div>

        <div><MdNotifications/></div>

        <div><FaGlobeAfrica/></div>
      </div>
    </div>
  )
}