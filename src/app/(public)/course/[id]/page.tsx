import { HeroSection } from "./_components/hero/hero-section";
import getCourse from "./content";
import OverviewSection from "./_components/overview/overview-section";
import CourseCurriculum from "./_components/course-curriculum/course-curriculum";
import ProjectSection from "./_components/project-section/projectsection"
import { InstructorSection } from "../../landing/_components/instructors/InstructorSection";
import { TestimonialSection } from "../../landing/_components/testimonials/TestimonialSection";
import { UnlockAccessSection } from "../../landing/_components/unlock/UnlockSection";
import { QnaSection } from "../../landing/_components/qna/QnaSection";

const Page: React.FC<any> = async ({ params }) => {
  const course = await getCourse(params.id);
  return (
    <div>
      <HeroSection course={course} />
      <OverviewSection course={course} />
      <CourseCurriculum course={course} />
      <ProjectSection/>
      <InstructorSection />
      <TestimonialSection/>
      <UnlockAccessSection/>
      <QnaSection/>
    </div>
  );
};

export default Page;
