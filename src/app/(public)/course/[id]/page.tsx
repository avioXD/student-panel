import Layout from "@/components/Layout";
import { HeroSection } from "./_components/hero/hero-section";
import getCourse from "./content";
import OverviewSection from "./_components/overview/overview-section";
import CourseCurriculum from "./_components/course-curriculum/course-curriculum";
import { InstructorSection } from "../../landing/_components/instructors/InstructorSection";

const Page: React.FC<any> = async ({ params }) => {
  const course = await getCourse(params.id);
  return (
    <Layout>
      <HeroSection course={course} />
      <OverviewSection course={course} />
      <CourseCurriculum course={course} />
      <InstructorSection />
    </Layout>
  );
};

export default Page;
