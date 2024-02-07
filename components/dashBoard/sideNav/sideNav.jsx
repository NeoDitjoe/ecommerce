import Link from "next/link";
import style from "./sideNav.module.css"
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const sideaNavLinks = [
  {
    title: 'pages',
    list: [
      {
        path: '/dashboard',
        name: 'Dashboard'
      },
      {
        path: '/dashboard/users',
        name: 'Users'
      },
      {
        path: '/dashboard/products',
        name: 'Products'
      },
      {
        path: '/dashboard/transactions',
        name: 'transactions'
      },
    ]
    
  },
  {
    title: 'Analatics',
    list: [
      {
        path: '/dashboard/revenue',
        name: 'Revenue'
      },
      {
        path: '/dashboard/reports',
        name: 'Reports'
      },
      {
        path: '/dashboard/teams',
        name: 'Teams'
      },
    ]
  },
  {
    title: 'User',
    list: [
      {
        path: '/dashboard/settings',
        name: 'Settings'
      },
      {
        path: '/dashboard/helps',
        name: 'Help'
      },
    ]
  }

]

export default function SideNav() {

  const pathname = usePathname()

  return (
   <div>
    {
      sideaNavLinks.map((items, index) => (
        <div className={style.main} key={index}>
          <h3>{items.title}</h3>

          <div>
            {
              items.list.map((link, j) => (
                <Link 
                key={index+j}
                  href={link.path} 
                  className={`${style.links} 
                  ${pathname === link.path ? style.activePath : ''}`
                }>

                  {link.name}
                </Link>
              ))
            }
          </div>
        </div>
      ))
    }
    <button 
      className={style.logout}
      onClick={() => signOut()}
    >Sign Out</button>

   </div>
  )
}