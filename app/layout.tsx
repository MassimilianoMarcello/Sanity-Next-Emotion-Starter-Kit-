"use client";

// import "./page.module.scss"; 
import "./main.module.scss"; 


import Navbar from "@/components/_NavBar/Navbar";

const almaqFont = "../public/fonts/Almaq Refined.ttf";
const theme = {
  fonts: {
    body: "'Protest Guerrilla', sans-serif",
    heading: "'Protest Guerrilla', sans-serif",
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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
