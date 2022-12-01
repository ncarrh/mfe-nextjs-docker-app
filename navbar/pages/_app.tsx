import "../styles/globals.css";
import type { AppProps } from "next/app";
import App from "next/app";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Button = dynamic(
  () => {
    return import("home/button");
  },
  { ssr: false }
);
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Suspense fallback={"loading"}>
        <Button
          title="my button on navbar"
          onClick={() => console.log("clicked")}
        />
      </Suspense>
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (ctx: any) => {
  const appProps: any = await App.getInitialProps(ctx);
  return appProps;
};

export default MyApp;
