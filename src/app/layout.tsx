import type { Metadata } from "next";
import { Raleway as FontSans } from "next/font/google";
import "@/app/styles/global.css";

import { cn } from "@/lib/utils";

import Navbar from "@/components/panel/nav-bar/NavBar";
import FooterBar from "@/components/panel/footer-bar/FooterBar";
import { Toaster } from "@/components/ui/sonner";

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
      {/* <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
      /> */}

      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div>
          <Navbar />
          <div className="min-h-screen">{children}</div>
          <FooterBar />
        </div>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
