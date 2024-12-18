import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "./components/navigation";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className='text-white p-6 text-center'> Welcome to my chatGTP clone (not a copying off youtube)
            <Navigation />
           </header>
        
        {children }

        <footer className='text-white p-6 text-center'> Made by Sultan, You better not fork my site... 👀 </footer>


      </body>
    </html>
  );
}
