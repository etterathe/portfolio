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
      <head></head>
      <body
        className={`${inter.className} bg-slate-50 text-gray-950 relative pt-28 sm:pt-36`}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 -z-10 overflow-hidden">
          <div
            className="absolute top-0 -right-1/4 bg-[#dbf7e5] w-1/2 h-1/2 max-w-[31.25rem] max-h-[31.25rem] rounded-full blur-[10rem]
          sm:w-3/4 sm:h-3/4 sm:max-w-[68.75rem] sm:max-h-[68.75rem]
          transform -translate-y-1/4"
          ></div>
          <div
            className="absolute top-0 -left-1/4 bg-[#dbd7fb] w-1/2 h-1/2 max-w-[31.25rem] max-h-[31.25rem] rounded-full blur-[10rem]
          sm:w-3/4 sm:h-3/4 sm:max-w-[68.75rem] sm:max-h-[68.75rem]
          transform -translate-y-1/4"
          ></div>
        </div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
