import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { CourseModel } from "@/models/course/course";
import { GoCheckCircle } from "react-icons/go";

interface Props {
  course: CourseModel;
}
const OverviewSection: React.FC<Props> = ({ course: { metadata } }) => {
  return (
    <div className=" bg-slate-100">
      <MaxWidthWrapper>
        <div className="py-[50px] ">
          {metadata?.program_overview && (
            <div className="flex flex-col gap-10">
              <div className="grid md:grid-cols-2">
                <div>
                  <h2 className="text-heading mb-4">Program Overview</h2>
                  <p className="text-subheading">{metadata.program_overview}</p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col ">
                  <h2 className="text-heading mb-4">
                    {metadata?.why_learn.title || "Why Learn?"}
                  </h2>
                  <div className="grid md:grid-cols-2">
                    <p className="text-md max-w-screen-lg">
                      {metadata?.why_learn.content || "No content available"}
                    </p>
                  </div>
                  
                </div>
              </div>
              <div className="w-full">
                <p className="text-lg mb-4">
                  {metadata?.tools?.title || "Tools and Technologies"}
                </p>
                {
                  <div className="flex flex-wrap gap-4 md:gap-8">
                    {metadata?.tools?.content.map(
                      (tool: string, index: any) => (
                        <div key={index} className="flex items-center gap-2">
                          <GoCheckCircle size={20} />
                          <p>{tool}</p>
                        </div>
                      )
                    )}
                  </div>
                }
              </div>
            </div>
          )}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default OverviewSection;
