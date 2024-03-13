import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { heroContent } from "./content";
import { GradientText } from "@/components/ui/typography/gradient-text";
import { Button } from "@/components/ui/button";
import Image from "@/components/ui/image";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="relative  min-h-[80vh]  pb-10  flex items-center  ">
      <div className="absolute   left-0 right-0 top-0 bottom-0">
        <div className=" absolute bottom-[10%] left-[20%]  w-[400px] h-[400px] rotate-45 bg-yellow-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-25 "></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-50 "></div>
      </div>
      <MaxWidthWrapper className="relative pt-16">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-8 md:gap-8 items-center ">
          <div className="flex flex-col gap-4">
            <GradientText className="text-sm  mx-auto md:mx-0 ">
              {heroContent.subtitle}
            </GradientText>
            <div>
              {" "}
              <div className="mb-4 text-center md:text-start ">
                <h1 className="text-2xl leading-relaxed  md:text-5xl md:leading-relaxed -mb-2  md:-mb-6 ">
                  Experience the <strong> Power </strong> of <br />
                  <strong> Self-Guided </strong> Learning
                </h1>
                <p className="text-sm md:text-lg mt-4 md:mt-8   ">
                  {heroContent.content}
                </p>
              </div>
            </div>
            <div className="mx-auto md:mx-0 ">
              <Link href="all-programs">
                <Button>Explore Program</Button>
              </Link>
            </div>
          </div>
          <div className="px-1 relative md:mx-6 xl:mx-10 ">
            <div className="border-2  rounded-xl border-gray-400 bg-white">
              <Image
                fill={true}
                src="/assets/svgs/video-frame.svg"
                alt="hero"
                className="w-full"
              />
              <div className="m-3 border rounded-md overflow-hidden bg-white">
                <video
                  controls
                  muted
                  mediaGroup="hero-video"
                  controlsList="nodownload"
                  className="overflow-hidden rounded-md aspect-video bg-black w-full"
                  poster="/assets/images/hero-video-poster.png"
                >
                  <source src={heroContent.video} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
