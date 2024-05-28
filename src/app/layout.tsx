import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "Jackie's Kitty Care",
  description: "In-home cat sitting",
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
            {children}
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
