import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CourseModel } from "@/models/course/course";
import {
  FileLock,
  FileQuestion,
  FileText,
  PlayCircle,
  Puzzle,
  TerminalSquare,
} from "lucide-react";

interface Props {
  course: CourseModel;
}

const icons = [
  {
    key: "video",
    IconEle: PlayCircle,
  },
  {
    key: "document",
    IconEle: FileText,
  },
  {
    key: "lab",
    IconEle: TerminalSquare,
  },
  {
    key: "quiz",
    IconEle: FileQuestion,
  },
  {
    key: "project",
    IconEle: Puzzle,
  },
  {
    key: "resource",
    IconEle: FileLock,
  },
];

const CourseCurriculum: React.FC<Props> = ({ course: { metadata } }) => {
  return (
    <div className="bg-gradient-to-b from-slate-100 to-white  pb-14">
      <MaxWidthWrapper className="overflow-x-hidden">
        <div className="shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)] rounded-xl p-10 py-14 w-full bg-white mb-10">
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-heading mb-4">
                {metadata?.curriculum?.title || "Curriculum"}
              </h2>
              <div className=" ">
                <Accordion type="single" collapsible className="w-full">
                  {metadata?.curriculum &&
                    metadata?.curriculum?.content.map(
                      (section: any, index: any) => (
                        <div key={index}>
                          <AccordionItem value={section.title}>
                            <AccordionTrigger className="">
                              <h3 className="text-subheading font-semibold">
                                {section?.title || ""}
                              </h3>
                            </AccordionTrigger>
                            {index < 2 && (
                              <AccordionContent className="bg-slate-200 rounded-lg relative">
                                <div className="p-5 flex flex-col gap-3">
                                  {section?.content?.map(
                                    (item: any, index: any) => (
                                      <div
                                        key={index}
                                        className="flex items-center gap-2 text-gray-800"
                                      >
                                        <div>
                                          {icons.map((icon, index) =>
                                            icon.key === item?.type ? (
                                              <icon.IconEle
                                                size={20}
                                                key={index}
                                              />
                                            ) : null
                                          )}
                                        </div>
                                        <p>{item?.label || ""}</p>
                                      </div>
                                    )
                                  )}
                                </div>
                              </AccordionContent>
                            )}
                          </AccordionItem>
                        </div>
                      )
                    )}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default CourseCurriculum;
