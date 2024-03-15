import { HeroSection } from "./_components/hero/hero-section";
import PlanSection from "./_components/plans/plan-section";
import { TestimonialSection } from "../landing/_components/testimonials/TestimonialSection";
import { QnaSection } from "../landing/_components/qna/QnaSection";

const Page: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <PlanSection />
      <TestimonialSection />
      <QnaSection />
    </div>
  );
};

export default Page;
