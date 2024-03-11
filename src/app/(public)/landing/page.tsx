import { HeroSection } from "./_components/hero/HeroSection";
import { CategorySection } from "./_components/category/CategorySection";
import { ExploreExperience } from "./_components/explore-experience/ExploreExperience";
import { InstructorSection } from "./_components/instructors/InstructorSection";
import { UnlockAccessSection } from "./_components/unlock/UnlockSection";
import { WtsSection } from "./_components/where-to-start/WtsSection";
import { TestimonialSection } from "./_components/testimonials/TestimonialSection";
import { QnaSection } from "./_components/qna/QnaSection";
import Layout from "@/components/Layout";

const LandingPage: React.FC<any> = () => {
  return (
    <div className="overflow-hidden w-full">
      <Layout>
        <HeroSection />
        <CategorySection />
        <WtsSection />
        <ExploreExperience />
        <InstructorSection />
        <TestimonialSection />
        <UnlockAccessSection />
        <QnaSection />
      </Layout>
    </div>
  );
};

export default LandingPage;
