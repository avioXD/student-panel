import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "@/app/styles/global.css";

import { cn } from "@/lib/utils";

import Navbar from "@/components/panel/NavBar";
import { Footer } from "react-day-picker";
import FooterBar from "@/components/panel/FooterBar";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Self Learning",
  description: "DataspaceAcademy Self Learning",
};

// Define the RootLayoutProps type
type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div>
          <Navbar />
          <div>{children}</div>
          <FooterBar />
        </div>
      </body>
    </html>
  );
}
