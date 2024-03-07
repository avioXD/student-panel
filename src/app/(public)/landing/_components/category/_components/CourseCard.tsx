import React from "react";
import { CourseCardProps } from "../content";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { CornerDownRight } from "lucide-react";
import Link from "next/link";
import Image from "@/components/ui/image";

interface Props {
  data: CourseCardProps;
}

export const CourseCard: React.FC<Props> = ({
  data: { image, title, description, link },
}) => {
  return (
    <div className=" p-4   rounded-xl  bg-gray-600 bg-opacity-20 backdrop-blur-md  ">
      <div className="rounded-x">
        <div className="mb-3">
          {image ? (
            <Image
              src={image}
              alt={title}
              className="object-cover rounded-xl w-full h-[220px] bg-slate-500 backdrop-blur-xl"
            />
          ) : (
            <div className="bg-gray-200 animate-pulse rounded-xl w-full h-[220px]" />
          )}
        </div>
        <div className="text-white">
          <p className="text-md mb-4">{title}</p>
          <Link
            href={"/"}
            className="text-xs flex gap-x-2 no-underline  text-decoration-line: hover:underline"
          >
            <CornerDownRight size={15} />
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
