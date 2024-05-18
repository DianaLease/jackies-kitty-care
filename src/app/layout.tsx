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
          {children}
        </main>
        <Footer />
        </div>
      </body>
    </html>
  );
}
