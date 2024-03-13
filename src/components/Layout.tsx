import { Suspense } from "react";
import FooterBar from "./panel/footer-bar/FooterBar";
import Navbar from "./panel/nav-bar/NavBar";
import LoadingScreen from "./common/loading-screen";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <Suspense fallback={<LoadingScreen />}>
        <main className="min-h-screen">{children}</main>
      </Suspense>
      <FooterBar />
    </>
  );
}
