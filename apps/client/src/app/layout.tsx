import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigationbar from "@/components/elements/Navigationbar";
import Background from "@/components/elements/Backgound";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Background />
          <main className="relative h-screen w-full">
            <Navigationbar />
            {children}
          </main>
      </body>
    </html>
  );
}
