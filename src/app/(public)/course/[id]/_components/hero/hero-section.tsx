import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "@/components/ui/image";
import { CourseModel } from "@/models/course/course";
import * as Star from "@assets/icons/star.svg";
import { BarChart, PlayCircle, UserRoundCheck,FileText, FileTerminal, FolderRoot, FileQuestion, Puzzle } from "lucide-react";
import { BookOpenText,  BadgeCheck,FileClock  } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  course: CourseModel;
}

export const HeroSection: React.FC<Props> = ({
  course: { metadata, title, description, paid, rating, students },
}) => {
  return (
    <div className="w-full min-h-[500px] bg-black relative">
      <div className="absolute backdrop-blur-sm left-0 right-0 top-20 bottom-0">
        <div className=" absolute top-[2%] left-[20%]  w-[400px] h-[400px] rotate-45 bg-green-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-25 "></div>
        <div className=" absolute bottom-[10%] right-[20%]  w-80 h-[60%] bg-red-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-25 "></div>
      </div>
      <MaxWidthWrapper>
        <div className=" py-[20px] md:py-[100px]">
          <div className="grid grid-cols-1  md:grid-cols-2 gap-8 md:gap-10  relative ">
            <div className="flex flex-col gap-4 text-white ">
              <p className="font-light text-center md:text-start">
                {paid ? "Paid Course" : "Free Course"}
              </p>
              <div>
                {" "}
                <div className="  text-center md:text-start mb-8">
                  <h1 className="text-2xl leading-relaxed  md:text-5xl md:leading-relaxed  font-semibold mb-4 md:mb-8 ">
                    {title}
                  </h1>
                  <p className="text-sm md:text-lg mt-4 md:mt-8   ">
                    {description}
                  </p>
                </div>
                <div className="flex gap-3 md:gap-8 justify-center flex-wrap md:justify-start">
                  <p className="text-sm flex items-center gap-1 ">
                    <Image src="/assets/icons/star.svg" alt="star" width={20} />
                    {rating}/5 rated program
                  </p>
                  <p className="text-sm flex items-center gap-1 ">
                    <UserRoundCheck size={20} />
                    {students} Learners already enrolled
                  </p>
                </div>
              </div>
              <div className="mx-auto md:mx-0 "></div>
            </div>
            <div className="px-1 relative  ">
              <div className="border-2 relative  md:absolute md:left-0 md:right-0 P-4  rounded-xl w-fit sm:w-fitS bg-white h-auto   mx-auto">
                <div className="p-3 w-fitS flex flex-col ">
                  <div className="  overflow-hidden bg-white  ">
                          <video
                          autoPlay={false}
                          loop
                          muted
                          mediaGroup="hero-video"
                          controlsList="nodownload"
                          className="overflow-hidden rounded-md aspect-video bg-black  w-[350px]"
                          poster="/assets/images/thumbnail.png"
                                                 
                          >
                             
                          <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" type="video/mp4" />
                          </video>
                  </div>
                  <Button className="w-full my-4" >
                    Subscribe Plan
                  </Button>
                  <div className="">
                  <div className="text-center text-gray-500 text-[14px] mb-4">Starting from ₹549/month </div>
                  <div className="bg-[#F1FBFF] rounded-lg my-2">
                    <div className="flex flex-col mx-5 justify-around flex-wrap">
                      <div className="flex items-center gap-1 my-2 text-gray-600">
                        <p><PlayCircle size={16}/></p>
                        <p className="text-[14px]">30+ hours of interactive video</p>
                      </div>
                      <div className="flex items-center gap-1 my-2  text-gray-600" >
                        <p><FileText size={16} /></p>
                        <p className="text-[14px]">25+ Assignments</p>
                      </div>
                      <div className="flex items-center gap-1 my-2  text-gray-600">
                        <p> <FileTerminal size={16}/></p>
                        <p className="text-[14px]">Realtime Lab Practice</p>
                      </div>
                      <div className="flex items-center gap-1 my-2  text-gray-600">
                        <p><FolderRoot size={16}/></p>
                        <p className="text-[14px]">80+ Course Resources</p>
                      </div>
                      <div className="flex items-center gap-1 my-2  text-gray-600">
                        <p><FileQuestion size={16}/></p>
                        <p className="text-[14px]">100+ Quizes</p>
                      </div>
                      <div className="flex items-center gap-1 my-2  text-gray-600">
                        <p> <Puzzle size={16}/></p>
                        <p className="text-[14px]">25+ Project</p>
                      </div>
                    </div>
                  </div>
                  </div>
                  <hr className="border border-gray-400 my-3"/>
                 <div className="p-2 mb-3">
                  
                 <div className="font-semibold mb-4">Skills you'll gain  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <p><BadgeCheck size={18}/></p>
                      <p className="text-[14px]">Compile and run a Go program.</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <p><BadgeCheck size={18}/></p>
                      <p className="text-[14px]">Read and write the basics of Go syntax.</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <p><BadgeCheck size={18}/></p>
                      <p className="text-[14px]">Print and Scan data using Go’s fmt package.</p>
                    </div>
                  </div>
                 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
