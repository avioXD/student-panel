import Layout from "@/components/Layout";
import PathsSection from "./_components/paths/paths-section";
import HeroSection from "./_components/hero/hero-section";
import { QnaSection } from "./_components/qna/qna-section";

const Page = () => {
  return (
    <div>
      <Layout>
        <HeroSection />
        <PathsSection />
        <QnaSection />
      </Layout>
    </div>
  );
};

export default Page;
