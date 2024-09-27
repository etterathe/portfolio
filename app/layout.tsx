import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wiktor Rapacz",
  description: "AI/ML Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <body className={`${inter.className} bg-slate-50 text-gray-950 relative pt-28 sm:pt-36`}>
      <div className='bg-[#dbf7e5] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] '></div>
        <div className='bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[35rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] '></div>
        <ActiveSectionContextProvider>
        <Header />
        {children} 
        <Footer />
        </ActiveSectionContextProvider>
        </body>
    </html>
  );
}
