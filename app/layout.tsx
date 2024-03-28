"use client";
import { Global } from "@emotion/react";
import globalStyles from "@/app/global_emotion_styles";
import { ThemeProvider } from "@emotion/react";
import "./page.module.css";
import NavBar2 from '@/components/NavBar2/NavBar2';



const almaqFont = "../public/fonts/Almaq Refined.ttf"
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
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <html lang="en">
        <head>
     
<link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Protest+Guerrilla&family=Protest+Strike&family=Quicksand:wght@300..700&display=swap" rel="stylesheet"/>
          </head>
        <body>
          {/* <NavBar /> */}
          <NavBar2/>
          {children}
        
        </body>
      </html>
    </ThemeProvider>
  );
}

