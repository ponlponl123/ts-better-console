import type { Metadata } from "next";
import { Sono, JetBrains_Mono } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "@/src/styles/globals.css";

import Header from "../components/header";
import Footer from "../components/footer";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const sono = Sono({
  variable: "--font-sono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ts-better-console",
  description: "A better console for TypeScript projects.",
  keywords: ["TypeScript", "console", "logging", "development"],
  authors: [{ name: "ponlponl123", url: "https://github.com/ponlponl123" }],
  openGraph: {
    title: "ts-better-console",
    description: "A better console for TypeScript projects.",
    url: "https://ponlponl123.github.io/ts-better-console",
    siteName: "ts-better-console",
    images: [
      {
        url: "https://ponlponl123.github.io/ts-better-console/og-image.png",
        width: 1200,
        height: 630,
        alt: "ts-better-console Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ts-better-console",
    description: "A better console for TypeScript projects.",
    images: ["https://ponlponl123.github.io/ts-better-console/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="apply-transition">
      <body
        className={`${sono.variable} ${jetbrainsMono.variable} antialiased apply-transition`}
      >
        <NextTopLoader color="currentColor" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
