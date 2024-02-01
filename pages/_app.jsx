import Wrapper from "@/components/wrapper/wrapper";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Wrapper
        children={<Component {...pageProps} />}
      />
    </SessionProvider>

  );
}
