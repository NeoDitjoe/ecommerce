import NextNProgress from 'nextjs-progressbar';
import Header from "../header/header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Wrapper(props) {

  const { children } = props

  return (
      <section className={inter.className}>
        <NextNProgress />
        <Header />
        <div style={{marginLeft:'10px'}}>
          {children}
        </div>
        <footer>
          <p>copyright © 2024 - All right reserved by Store4Real</p>
        </footer>
      </section>
  )
}