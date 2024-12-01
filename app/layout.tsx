import type { Metadata } from "next";
import { Ubuntu_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Head from "next/head";

const ubuntuMono = Ubuntu_Mono({
  subsets: ["latin"],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: "Pedro C. | Developer",
  description: "Pedro Castaneda is a software developer and former truck driver. He is a full-stack developer with a focus on front-end development and has professional experience in WordPress, PHP, and JavaScript. He interned at Trinchero Family Estates and is a graduate of the 2023 CodeStack Academy program in Stockton, California.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <html lang="en">
        <body
          className={`${ubuntuMono.className} antialiased bg-honeydew text-licorice dark:bg-licorice dark:text-honeydew flex flex-col min-h-screen`}
        >
          <NavBar />
          <main className="flex-grow flex flex-col items-center justify-center text-balance">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </>

  );
}
