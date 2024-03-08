import type { Metadata } from "next";
import { Raleway as FontSans } from "next/font/google";
import "@/app/styles/global.css";

import { cn } from "@/lib/utils";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Self Learning",
  description: "DataspaceAcademy Self Learning",
};

// Define the RootLayoutProps type
type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth ease-in-out"
    >
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
