import MaxWidthWrapper from "@/components/panel/MaxWidthWrapper";
import { unlockSectionContent } from "./content";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "@/components/ui/image";

interface Props {}

export const UnlockAccessSection: React.FC<Props> = ({}) => {
  return (
    <div className="bg-white">
      <MaxWidthWrapper>
        <div className="my-10 relative">
          <div className="absolute -inset-3 rounded-lg bg-gradient-secondary opacity-75 blur-md mx-10 mt-10"></div>
          <div className="relative  bg-gradient-secondary border px-8 py-10 rounded-xl   ">
            <div className="grid  md:grid-cols-2">
              <div className="flex flex-col gap-4 col-span-1">
                <h2 className="text-heading">{unlockSectionContent.title}</h2>
                <p className="text-subheading ">
                  {unlockSectionContent.description}
                </p>
                <div className=" ">
                  <Link href={unlockSectionContent.link}>
                    <Button variant={"secondary"}>
                      {unlockSectionContent.linkText}
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden md:flex  justify-center items-center max-h-[12rem]">
                <Image
                  fill={true}
                  src={unlockSectionContent.icon}
                  alt={unlockSectionContent.title}
                  className="object-contain h-full w-full scale-150 opacity-75 "
                />
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
