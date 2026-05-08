import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";


export const metadata: Metadata = {
  metadataBase: new URL("https://www.jackieskittycare.com"),
  title: {
    default: "Jackie's Kitty Care | In-Home Cat Sitting in Monmouth County, NJ",
    template: "%s | Jackie's Kitty Care",
  },
  description:
    "Reliable, loving in-home cat sitting in Middletown and Monmouth County, NJ. Jackie visits your home so your cat stays comfortable, safe, and stress-free while you're away.",
  keywords: [
    "cat sitting",
    "in-home cat sitting",
    "pet sitting",
    "Monmouth County",
    "Middletown NJ",
    "cat sitter",
    "New Jersey cat sitting",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.jackieskittycare.com",
    siteName: "Jackie's Kitty Care",
    title: "Jackie's Kitty Care | In-Home Cat Sitting in Monmouth County, NJ",
    description:
      "Reliable, loving in-home cat sitting in Middletown and Monmouth County, NJ. Your cat stays home — comfortable, safe, and stress-free.",
  },
  twitter: {
    card: "summary",
    title: "Jackie's Kitty Care | In-Home Cat Sitting in Monmouth County, NJ",
    description:
      "Reliable, loving in-home cat sitting in Middletown and Monmouth County, NJ.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="app">
        <Navbar />
        <main>
          <div className="app-page">
            <PageTransition>{children}</PageTransition>
          </div>
          <div className="credit">
            <p className='small-text'>Illustrations by <a href="https://icons8.com/illustrations/author/eEbrZFlkyZbD" target='_blank'>Anna A</a> from <a href="https://icons8.com/illustrations" target='_blank'>Ouch!</a></p>
          </div>
          <Footer />
        </main>
        </div>
      </body>
    </html>
  );
}
