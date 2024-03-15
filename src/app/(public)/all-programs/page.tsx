import { HeroSection } from "./_components/hero/hero-section";
import Programs from "./_components/programs/programs";
import { ExploreExperience } from "../landing/_components/explore-experience/ExploreExperience";
import { InstructorSection } from "../landing/_components/instructors/InstructorSection";
import { TestimonialSection } from "../landing/_components/testimonials/TestimonialSection";
import { UnlockAccessSection } from "../landing/_components/unlock/UnlockSection";
import { QnaSection } from "../landing/_components/qna/QnaSection";

const Page: React.FC<any> = () => {
  return (
    <div>
      <HeroSection />
      <Programs />
      <ExploreExperience />
      <InstructorSection />
      <TestimonialSection />
      <UnlockAccessSection />
      <QnaSection />
    </div>
  );
};

export default Page;
