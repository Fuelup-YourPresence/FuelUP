import "@/styles/globals.css";
import NextNProgress from "nextjs-progressbar";
export default function App({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="#C4F0AB" options={{ showSpinner: false }} />
      <Component {...pageProps} />
    </>
  );
}
