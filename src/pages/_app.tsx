import { ThemeProvider } from "@/contexts/ThemeProvider";
import type { AppProps } from "next/app";

import "@/styles/global.css";

export default function RootLayout({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
