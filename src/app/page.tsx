import { HeroSection } from "./(public)/landing/_components/hero/HeroSection";
import { CategorySection } from "./(public)/landing/_components/category/CategorySection";
import { WtsSection } from "./(public)/landing/_components/where-to-start/WtsSection";
import { ExploreExperience } from "./(public)/landing/_components/explore-experience/ExploreExperience";
import { InstructorSection } from "./(public)/landing/_components/instructors/InstructorSection";
import { UnlockAccessSection } from "./(public)/landing/_components/unlock/UnlockSection";
import { TestimonialSection } from "./(public)/landing/_components/testimonials/TestimonialSection";
import { QnaSection } from "./(public)/landing/_components/qna/QnaSection";
import LandingPage from "./(public)/landing/page";

export default function Page() {
  // useEffect(() => {
  //   router.push("/landing");
  // }, [router]);

  return (
    <div>
      <LandingPage />
    </div>
  );
}
