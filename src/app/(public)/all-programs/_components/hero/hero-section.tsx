import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { heroContent } from "./content";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <div className="w-full min-h-[500px] bg-black relative">
      <div className="absolute backdrop-blur-sm left-0 right-0 top-20 bottom-0">
        <div className=" absolute top-[2%] left-[20%]  w-[400px] h-[400px] rotate-45 bg-green-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-25 "></div>
        <div className=" absolute bottom-[10%] right-[20%]  w-80 h-[60%] bg-red-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-25 "></div>
      </div>
      <MaxWidthWrapper>
        <div className=" py-[100px] flex flex-col relative text-white">
          <div className="text-center flex flex-col gap-8  mb-6 md:mb-10 max-w-screen-md mx-auto">
            <h1 className="text-title leading-relaxed">
              Accelerate your career in <br /> <strong>Cybersecurity</strong>
            </h1>
            <p className="text-subheading mx-auto">{heroContent.content}</p>
            <div className="mx-auto md:mx-0 ">
              <Button variant={"offset"}>Explore Program</Button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
