"use client";

import Footer from "@/components/ΩFooter/Footer";
import { zf } from '../styles/fonts';
// import "./page.module.scss"; 
import "./main.module.scss"; 


import Navbar from "@/components/_NavBar/Navbar";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={zf.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
