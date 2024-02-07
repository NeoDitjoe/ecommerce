import StateContext from "@/lib/context";
import Header from "../header/header";
import { Inter } from "next/font/google";
import style from './wrapper.module.css'

const inter = Inter({ subsets: ["latin"] });

export default function Wrapper(props) {

  const { children } = props
  const { theme } = StateContext()

  return (
      <section className={`${inter.className} ${theme ? style.black : style.white }`}>
        <Header />
        <div>
          {children}
        </div>
        <footer>
          <p className='footer'>copyright © 2024 - All right reserved by Store4Real</p>
        </footer>
      </section>
  )
}