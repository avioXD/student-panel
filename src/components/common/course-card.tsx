import React from "react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { CornerDownRight } from "lucide-react";
import Link from "next/link";
import Image from "@/components/ui/image";
import { CourseModel } from "@/models/course/course";
import { cn } from "@/lib/utils";

interface Props {
  data: CourseModel;
  className?: string;
  variant?: "default" | "dark";
}

export const CourseCard: React.FC<Props> = ({
  data: { image, title, id },
  className,
  variant = "default",
}) => {
  const text = variant === "dark" ? "text-black" : "text-white";

  return (
    <div
      className={cn(
        " p-4  rounded-xl bg-gray-600 bg-opacity-20 backdrop-blur-md text-white ",
        className
      )}
    >
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
        <div className={text}>
          <p className="text-md mb-4 font-medium">{title}</p>
          <Link
            href={`/course/${id}`}
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
