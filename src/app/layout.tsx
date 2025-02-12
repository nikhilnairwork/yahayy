import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/Component/Footer";
import Navbar from "@/Component/Navbar";
import { Providers } from "./StoreProvider";
import { Toaster } from "sonner"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "yahayy New way of Gift online",
  description: "Find the perfect online gifts for your loved ones, family, friends, colleagues, and more. Shop unique presents for all occasions.",
  keywords:"online gifts, gifts for family, gifts for friends, gifts for colleagues, birthday gifts, special occasion gifts"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <Providers>
          <Navbar />
          {children}
          <Toaster richColors  position="top-right"/>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
