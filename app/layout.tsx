import Footer from "@/components/footer";

import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} antialiased`}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
