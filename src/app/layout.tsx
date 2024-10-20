import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Birat Pandey - Front-end WebDeveloper",
  description:
  "Birat Pandey is a frontend developer and designer from Nepal, but he is also a tech enthusiast. He helps in the development of responsive and user-friendly websites, continuously learning and improving his skill sets.",
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={twMerge(
          inter.className,
          "flex antialiased h-screen overflow-hidden bg-gray-100"
        )}
      >
        {/* <Suspense fallback={<div className="w-full h-full bg-white text-slate-300 absolute flex justify-center items-center">
          <h1 className="text-9xl animate-pulse">...</h1>
        </div>} /> */}
        <Sidebar />
        <div className="lg:pl-2 lg:pt-2 bg-gray-100 flex-1 overflow-y-auto">
          <div className="flex-1 bg-white min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200 overflow-y-auto">
            {children}
            {/* <Footer /> */}
          </div>
        </div>
      </body>
    </html>
  );
}
