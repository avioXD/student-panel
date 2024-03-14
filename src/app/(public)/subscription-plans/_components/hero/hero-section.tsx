import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { heroContent } from "./content";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <div className="w-full min-h-[200px] bg-white relative  ">
      <div className="absolute backdrop-blur-sm left-0 right-0 top-20 bottom-0  ">
        <div className=" absolute top-[2%] left-[28%]  w-[400px] h-[400px] rotate-45 bg-blue-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-25 "></div>
        <div className=" absolute top-[2%] right-[5%]  w-[200px] h-[200px] rotate-45 bg-orange-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-25 "></div>
      </div>
      <MaxWidthWrapper>
        <div className=" pt-[100px] flex flex-col relative text-black">
          <div className="text-center flex flex-col gap-8  mb-6 md:mb-10 max-w-screen-md mx-auto">
            <h1 className="text-title leading-relaxed">
              Transparent and Flexible <br /> <strong>Pricing Plan</strong>
            </h1>
            <p className="text-subheading mx-auto">{heroContent.content}</p>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
