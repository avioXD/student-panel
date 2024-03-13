import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { getFeaturedPrograms, getPrograms } from "./content";
import { CourseCard } from "@/components/common/course-card";
import { CourseModel } from "@/models/course/course";

const Programs: React.FC = async () => {
  const featured = await getFeaturedPrograms();
  const programs = await getPrograms();
  return (
    <div className="w-full min-h-[500px] bg-slate-100 relative">
      <MaxWidthWrapper>
        <div className="py-[50px] flex flex-col relative text-white  ">
          <div className="flex flex-col  mb-20">
            <h1 className="text-heading mb-8 text-center text-black">
              {" "}
              Featured Programs{" "}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {featured &&
                featured.map((course: CourseModel) => (
                  <div key={course.id}>
                    <CourseCard
                      data={course}
                      variant="dark"
                      className="bg-white shadow-md"
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className="flex flex-col ">
            <h1 className="text-heading mb-8 text-center text-black">
              {" "}
              All Programs
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
              {programs &&
                programs.map((course: CourseModel) => (
                  <div key={course.id}>
                    <CourseCard
                      data={course}
                      variant="dark"
                      className="bg-white shadow-md"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Programs;
