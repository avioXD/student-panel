import MaxWidthWrapper from "@/components/panel/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { wtsSectionContent } from "./content";
import Image from "@/components/ui/image";

interface Props {}

export const WtsSection: React.FC<Props> = ({}) => {
  return (
    <div className="bg-white">
      <MaxWidthWrapper>
        <div className="my-10 relative">
          <div className="absolute -inset-3 rounded-lg bg-gradient  opacity-75 blur-md mx-10 mt-10"></div>
          <div className="relative  bg-gradient  border px-8   rounded-xl  overflow-hidden ">
            <div className="grid  md:grid-cols-2">
              <div className="flex flex-col gap-4 col-span-1 py-10">
                <h2 className="text-heading">{wtsSectionContent.title}</h2>
                <p className="text-subheading ">
                  {wtsSectionContent.description}
                </p>
                <div className=" ">
                  <Link href={wtsSectionContent.link}>
                    <Button variant={"secondary"}>
                      {wtsSectionContent.linkText}
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden md:flex justify-center items-baseline max-h-[12rem]">
                <Image
                  fill={true}
                  src={wtsSectionContent.icon}
                  alt={wtsSectionContent.title}
                  className="object-contain h-full w-full scale-125 mt-10 mix-blend-overlay"
                />
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
