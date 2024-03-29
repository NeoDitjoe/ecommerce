import Wrapper from "@/components/wrapper/wrapper";
import { ContextProvider } from "@/lib/context";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react"
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ContextProvider>
        <NextNProgress color="orange" />
        <Wrapper
          children={<Component {...pageProps} />}
        />
      </ContextProvider>

    </SessionProvider>

  );
}
