import { ThemeProvider } from "@/contexts/ThemeProvider";
import type { AppProps } from "next/app";

import "@/styles/global.css";
import Header from "@/components/Header";

export default function RootLayout({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex flex-col h-screen">
        <Header />
        <main className="flex-1">
          <Component {...pageProps} />
        </main>
      </div>
    </ThemeProvider>
  );
}
