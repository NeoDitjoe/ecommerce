import Wrapper from "@/components/wrapper/wrapper";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Wrapper
      children={<Component {...pageProps} />}
    />
  );
}
