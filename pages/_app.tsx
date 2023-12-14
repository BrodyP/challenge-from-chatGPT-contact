import MainNavigation from "@/components/layout/header-navigation";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Fragment } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <MainNavigation />
      <Component {...pageProps} />
    </Fragment>
  );
}
