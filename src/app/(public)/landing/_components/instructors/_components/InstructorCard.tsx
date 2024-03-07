import React from "react";
import { InstructorCardProps } from "../content";
import { cn } from "@/lib/utils";

interface Props {
  data: InstructorCardProps;
  className?: string;
}

export const InstructorCard: React.FC<Props> = ({
  data: { image, name, designation, description },
  className,
}) => {
  return (
    <div className={cn(className)}>
      <div className="  relative mb-8 ">
        <div className=" p-2  rounded-xl bg-white  h-[800px]  md:h-[440px] lg:h-[430px] xl:h-[400px] shadow-md md:ml-28 md:pl-28">
          <div className="p-2 md:hidden">
            <img
              src={image}
              alt={name}
              className="w-52 h-52 rounded-xl object-cover bg-slate-500 backdrop-blur-md"
            />
          </div>
          <div className=" px-4 md:my-8  bg-opacity-75 backdrop-blur-md rounded-xl">
            <p className="text-2xl font-semibold mb-2">{name}</p>
            <p className="text-md mb-4 ">{designation}</p>
            <p className="max-w-[80%] line-clamp-[18]  ">{description}</p>
          </div>
        </div>
        <div className="hidden md:flex md:absolute left-0 bottom-0 top-[10%] items-center justify-center">
          <img
            src={image}
            alt={name}
            className="w-52 h-52 rounded-xl object-cover bg-slate-500 backdrop-blur-md"
          />
        </div>
      </div>
    </div>
  );
};
