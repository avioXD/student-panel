import type { Metadata } from "next";
import { Raleway as FontSans } from "next/font/google";
import "@/app/styles/global.css";

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

export default function Layout({ children }: RootLayoutProps) {
  return <main>{children}</main>;
}
