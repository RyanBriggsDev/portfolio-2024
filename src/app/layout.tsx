import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ryan Briggs - Frontend Developer & Shopify Expert",
  description: "Frontend developer specializing in React, Next.js, and Shopify development. Creating fast, scalable web applications with exceptional user experiences.",
  keywords: ["Frontend Developer", "React Developer", "Shopify Developer", "Next.js", "Web Development", "Manchester"],
  authors: [{ name: "Ryan Briggs" }],
  creator: "Ryan Briggs",
  publisher: "Ryan Briggs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ryanbriggs.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ryan Briggs - Frontend Developer & Shopify Expert",
    description: "Frontend developer specializing in React, Next.js, and Shopify development. Creating fast, scalable web applications with exceptional user experiences.",
    url: "https://ryanbriggs.dev",
    siteName: "Ryan Briggs Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ryan Briggs - Frontend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryan Briggs - Frontend Developer & Shopify Expert",
    description: "Frontend developer specializing in React, Next.js, and Shopify development.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
