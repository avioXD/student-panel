import { HeroSection } from "./_components/hero/HeroSection";
import { CategorySection } from "./_components/category/CategorySection";
import { ExploreExperience } from "./_components/explore-experience/ExploreExperience";
import { InstructorSection } from "./_components/instructors/InstructorSection";
import { UnlockAccessSection } from "./_components/unlock/UnlockSection";
import { WtsSection } from "./_components/where-to-start/WtsSection";
import { TestimonialSection } from "./_components/testimonials/TestimonialSection";
import { QnaSection } from "./_components/qna/QnaSection";

const LandingPage: React.FC<any> = () => {
  return (
    <div>
      <HeroSection />
      <CategorySection />
      <WtsSection />
      <ExploreExperience />
      <InstructorSection />
      <TestimonialSection />
      <UnlockAccessSection />
      <QnaSection />
    </div>
  );
};

export default LandingPage;
