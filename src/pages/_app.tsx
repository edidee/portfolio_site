import { PageLayout } from "@/layout/PageLayout";
import "@/styles/globals.css";

import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  const LayoutComponent = PageLayout;

  return (
    <LayoutComponent>
      <Component {...pageProps} />
    </LayoutComponent>
  );
}
