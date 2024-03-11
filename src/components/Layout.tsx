import FooterBar from "./panel/footer-bar/FooterBar";
import Navbar from "./panel/nav-bar/NavBar";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <FooterBar />
    </>
  );
}
