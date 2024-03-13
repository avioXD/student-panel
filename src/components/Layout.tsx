import { Suspense } from "react";
import FooterBar from "./panel/footer-bar/FooterBar";
import Navbar from "./panel/nav-bar/NavBar";
import LoadingScreen from "./common/loading-screen";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Layout({ children, className }: Props) {
  return (
    <div>
      <Navbar />
      <div>
        <Suspense fallback={<LoadingScreen />}>
          <main className="min-h-screen">{children}</main>
        </Suspense>
      </div>

      <FooterBar />
    </div>
  );
}
