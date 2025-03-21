import type { Metadata } from "next";
import { Raleway as FontSans } from "next/font/google";
import "@/app/styles/global.css";

import { cn } from "@/lib/utils";

import { Toaster } from "@/components/ui/sonner";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const metadata: Metadata = {
  title: "Self Learning",
  description: "DataspaceAcademy Self Learning",
};

// Define the RootLayoutProps type
type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth ease-in-out"
    >
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          fontSans.variable
        )}
      >
        <div>{children}</div>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
