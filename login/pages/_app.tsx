import "../styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { Suspense, useState, useEffect } from "react";
import Document from "next/document";

const RemotePDP = dynamic(
  () => {
    return import("pdp/pdp");
  },
  { ssr: false, suspense: true }
);

export default function App({ Component, pageProps }: AppProps) {
  const [_document, setDocument] = useState(null);
  useEffect(() => {
    setDocument(new Document());
  }, []);
  return (
    <>
      <Suspense fallback={"...loading"}>{_document && <RemotePDP />}</Suspense>
      <Component {...pageProps} />
    </>
  );
}
