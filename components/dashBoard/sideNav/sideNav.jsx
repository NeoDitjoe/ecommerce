import Link from "next/link";
import style from "./sideNav.module.css"

export default function SideNav() {

  return (
    <div>
      <div>
        <h3>Pages</h3>
        <div className={style.links}>
          <div>
            <Link href={'/dashboard'}>Dashboard</Link>
          </div>

          <div>
            <Link href={'/dashboard/users'}>User</Link>
          </div>

          <div>
            <Link href={'/dashboard/products'}>products</Link>
          </div>
          <div>
            <Link href={'/dashboard/transaction'}>Transcations</Link>
          </div>

        </div>
      </div>

      <div>
        <h3>Analatics</h3>

        <div className={style.links}>
          <div>
            <Link href={'/dashboard/'}>Revenue</Link>
          </div>

          <div>
            <Link href={'/dashboard/'}>Reports</Link>
          </div>

          <div>
            <Link href={'/dashboard/'}>Teams</Link>
          </div>
        </div>
      </div>

      <div>
        <h3>User</h3>

        <div className={style.links}>
          <div>
            <Link href={'/dashboard/'}>Settings</Link>
          </div>

          <div>
            <Link href={'/dashboard/'}>Help</Link>
          </div>
        </div>
      </div>
    </div>
  )
}