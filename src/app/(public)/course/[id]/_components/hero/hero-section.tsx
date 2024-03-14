import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "@/components/ui/image";
import { CourseModel } from "@/models/course/course";
import * as Star from "@assets/icons/star.svg";
import { UserRoundCheck } from "lucide-react";

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
            <div className="px-1 relative   ">
              <div className="border-2 relative md:absolute md:left-0 md:right-0   rounded-xl   bg-white h-[500px] w-full max-w-[30rem] mx-auto"></div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
