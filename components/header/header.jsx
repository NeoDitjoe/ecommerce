import Link from "next/link";


export default function Header(){

  return(
    <header>
      <nav>
        <div>
          <Link  href='/' >
            Store4Real
          </Link>

          <ul>
            <li>
              <Link href={'/cart'}>Cart</Link>
            </li>
            <li>
              <Link  href={'signin'}>Sign in</Link>
            </li>
          </ul>
          
        </div>
      </nav>
    </header>
  )
}