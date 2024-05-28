import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RyanBriggsDev",
  description: "Personal portfoilio website of Ryan Briggs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
